# antd上传图片到七牛云
## 问题
一开始是根据官网案例，使用action上传到七牛云，报错`this.props.data.map is not a function`，且网页会刷新，然后白屏。
但是将官网demo直接复制过来是可以的，猜测是上传七牛云的配置之类有问题。

## 尝试1
参考：https://www.shuzhiduo.com/A/pRdBkjoGzn
使用customRequest，在上传前先获取七牛云的上传凭证，然后调用axios.post方法上传图片

结果：不白屏了，但是400，
使用debugger发现报错：`{"error":"invalid multipart format: request Content-Type isn't multipart/form-data"}`

## 尝试2
根据上面的报错，修改content-type为multipart/form-data，
结果报错`{error: "invalid multipart format: multipart: NextPart: EOF"}`

根据官方文档：https://developer.qiniu.com/kodo/kb/3971/upload-a-message-assembly提示，Content-Length值有误，
解决方法：取消报文中的这个字段

结果：不配置headers还是报错

## 解决
参考：https://blog.qiatia.cn/2019/05/18/Axios/

axios在请求的时候会拦headers，所以上传图片的时候需要创建一个干净的axios对象来提交
```javascript
import {Upload} from 'antd'


<Upload.Dragger {...uploadProps}>
    <p className="ant-upload-drag-icon">
        <InboxOutlined />  // antd图标
    </p>
    <p className="ant-upload-text">点击或拖拽上传名片</p>
    <p className="ant-upload-hint">支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式</p>
</Upload.Dragger>

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("支持的图片格式：PNG、JPG、JPEG");
        return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 20;
    if (!isLt2M) {
        message.error("图片大小需小于20MB!");
        return false;
    }
    if(!token) {
        message.error("上传网络异常，请重试");
        return false;
    }
    return true;
}
const uploadProps = {
        name: 'file',
        showUploadList: false,
        multiple: false,
        accept: '.png, .jpg, .jpeg, .gif',
        action: 'http://upload.qiniu.com',
        beforeUpload: beforeUpload,  // 上传之前预操作
        onStart(file) {
            debugger
        },
        onSuccess(ret, file) {
            debugger
        },
        onProgress({percent}, file) {
            console.log('onProgress', percent);
        },
        onError(err) {
            console.log(err.message);
            debugger
        },
        customRequest({
            action,
            file,
            onError,
            onProgress,
            onSuccess,
            withCredentials,
        }) {
            let formData = new window.FormData()
            formData.append('file', file)
            formData.append('token', token)  // 七牛云的token
            formData.append('key', key)  // 设置一个唯一key，这里是时间戳+随机数： Date.now() + Math.floor(Math.random()*(999999-100000)+100000)+1
            // 创建一个干净的axios
            let $upload = axios.create({withCredentials: false});
            $upload({
                url: action,
                data: formData,
                method: 'POST',
                onUploadProgress: (progressEvent)=> {
                    //imgLoadPercent 是上传进度，可以用来添加进度条
                    let imgLoadPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    console.log(imgLoadPercent);
                },
            }).then((res)=>{
                debugger
                console.log(res)
            }).catch((res)=>{
                debugger
                console.log(res)
            })
        }
    }
```

# 总结
1. 使用customRequest自定义请求
2. 参考七牛云官网设置配置参数
3. 上传时创建新的干净的axios对接调上传接口