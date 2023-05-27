# 笔试题

1. 数组去重[1,2,3,1,4,5] 至少两种写法
```js
const arr = [1,2,3,1,4,5]
// 方法1
console.log([...new Set(arr)])
// 类似的：Array.from(new Set(arr))

// 方法2
function unique (arr) {
  const newArr = []
  arr.forEach(item => {
    // 类似的方法：
    // !newArr.includes(item)
    // newArr.indexOf(item) === -1
    if (!newArr.find(i => i === item)) {、
      newArr.push(item)
    }
  })
  return newArr
}

// 方法3
function unique (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true
    // 从当前索引向后遍历，查找是否元素和当前元素相同
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isUnique = false
        break
      }
    }
    // 如果后面没有元素和当前元素相同，则当前元素唯一，push进新数组
    isUnique && newArr.push(arr[i])
  }
  return newArr
}
```

//2. 数组排序从小到大 至少两种写法 
```js
let arr2 = [1, 3, 2, 4, 6, 6]
// 方法一
console.log(arr2.sort((a, b) => a - b));
// 不改变原数组：arr2.toSort((a, b) => a - b)

// 方法二(冒泡)
function bubbleSort (arr) {
  let newArr = [...arr]
  if (!Array.isArray(newArr)) {
    throw new Error('非数组')
  }

  // 类似的：
  // 选择排序
  // for (let i = 0; i < newArr.length - 1; i++) {
  //   let minIndex = i
  //   for (let j = i + 1; j < newArr.length; j++) {
  //     if (newArr[minIndex] > newArr[j]) {
  //       minIndex = j
  //     }
  //   }
  //   if (minIndex !== i) {
  //     let temp = newArr[i]
  //     newArr[i] = newArr[minIndex]
  //     newArr[minIndex] = temp
  //   }
  // }
  // 插入排序
  // for (let i = 1; i < newArr.length; i++) {
  //   for (let j = i; j > 0 && newArr[j] < newArr[j - 1]; j--) {
  //     temp = newArr[j];
  //     newArr[j] = newArr[j-1];
  //     newArr[j-1] = temp
  //   }
  // }
  for (let i = newArr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let temp = newArr[j]
      if (newArr[j] > newArr[j+1]) {
        // 或者：newArr[j] ^= newArr[j - 1]; newArr[j - 1] ^= newArr[j]; newArr[j] ^= newArr[j - 1];
        temp = newArr[j];
        newArr[j] = newArr[j+1];
        newArr[j+1] = temp
      }
    }
  }
  return newArr;
}

// console.log(bubbleSort(arr));
console.log(bubbleSort(arr2));
```


// 3.结果输出
```js
var a = 'global'
function fn() {　　
　 console.log(a)
  if(false){
    var a = 'local';　
  }　　　
　 console.log(a)
}
fn()

// 解析
// fn中会先执行变量a的声明：var a；，此时a未赋值，为undefined
// 然后从上往下执行，第一个a是访问fn作用域中的a，为undefined
// if (false) {}里面（a的赋值操作）不会执行
// 第二个a依然是fn作用域中的a，为undefined
```

// 4.去除字符串中的空格 eg: ' g o ' =>  'go'
```js
let str = ' g o '
// 方法1:
let filterStr = str.split(' ').filter(s => s).join('')
console.log(filterStr)

// 方法2:
str.replace(/ /g, '')

// 方法3:
str.trim()
```


