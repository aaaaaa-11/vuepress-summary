# React findAllByRole() 报错
错误：Unable to find role="listitem"

代码：
```javascript
// 组件：获取列表数据并渲染
export default () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(...).then(response => response.json())
      .then(data => {
        setList(data)
      })
  }, [])

  return (
    <ul>
      {
        list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))
      }
    </ul>
  )
}

// xxx.test.js
import { render, screen } from "@testing-library/react"
test('xxx', async () => {
  render(...)

  const elements = await screen.findAllByRole('listitem') // 报错：Unable to find role="listitem"
  expect(elements).not.toHaveLength(0)
})
```

原因：接口太慢，findAllByRole()默认等1s，接口获取到数据超过1s，所以测试运行后找不到`listitem`。

解决：设置超时时间长一点：`findAllByRole('listitem', {}, { timeout: 3000 })`