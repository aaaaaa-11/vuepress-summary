<template>
  <section class="compilation text-center">
    <h2>编译原理</h2>
    <p>JavaScript是编译语言，但是编译发生在在执行前几微秒（甚至更快）的时间内。</p>
    <p>&darr;过程</p>
    <ul class="complier-process">
      <li class="complier-process-step">
        <p class="step-title">1.分词/词法分析</p>
        <p>&darr;</p>
        <p class="step-result">token</p>
      </li>
      <p>&rarr;</p>
      <li class="complier-process-step">
        <p class="step-title">2.解析/语法分析</p>
        <p>&darr;</p>
        <p class="step-result">AST</p>
      </li>
      <p>&rarr;</p>
      <li class="complier-process-step">
        <p class="step-title">3.代码生成</p>
        <p>&darr;</p>
        <p class="step-result">机器指令</p>
      </li>
    </ul>
  </section>
  <section class="scope text-center">
    <h2>作用域</h2>
    <table class="scope-basics">
      <thead>
        <tr>
          <th>作用</th>
          <th>工作流程</th>
          <th>嵌套</th>
        </tr>
      </thead>
      <tbody>
        <tr class="scope-basic-role">
          <td>存储、查找变量</td>
          <td>
            <ol class="scope-process">
            <li>
              <p>编译器编译，然后代码生成</p>
              <ul>
                <li>遇到变量声明，询问作用域该变量是否存在</li>
                <ul>
                  <li>不存在，则让作用域声明该变量</li>
                  <li>存在，则忽略</li>
                </ul>
              </ul>
            </li>
            <li>
              <p>引擎执行编译后的代码</p>
              <ul>
                <li>遇到变量，询问作用域该变量是否存在</li>
                <ul>
                  <li>变量存在，让作用域返回，然后使用</li>
                  <li>变量不存在，继续查找
                    <ul>
                      <li>找到，返回，使用；</li>
                      <li>找不到，引擎抛出异常。</li>
                    </ul>
                  </li>
                </ul>
              </ul>
              <div>
                <p>查找：LHS、RHS（L、R分别指左、右）。</p>
                <ul>
                  <li>LHS查找：查找赋值操作的左侧，例如 a = 2; 查找a是LHS查找。</li>
                  <li>RHS查找：查找赋值操作的非左侧，例如 f(); 查找函数f是RHS查找。</li>
                </ul>
              </div>
            </li>
        </ol>
          </td>
          <td>
            <div class="box">
              <p>顶层：全局作用域</p>
              <span class="box">全局变量</span>
              <div class="box">
                <p>函数f1</p>
                <span class="box">f1变量</span>
                <div class="box">
                  <p>函数f2</p>
                  <span class="box">f2变量</span>
                </div>
              </div>
            </div>
            <p>查找：从内向外，中途找到或者找到顶层即停止。</p>
            <p>对于LHS，如果找不到，非严格模式下，会自动创建一个变量；严格模式下，报错：ReferenceError。</p>
            <p>对于RHS，如果找不到，则报错ReferenceError，如果找到了，但是进行了不合理的操作，如(a = null).property，会报错TypeError。</p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <p>学习资料：《你不知道的JavaScript》</p>
</template>

<script setup>
import {} from 'vue'

</script>

<style lang="less" scoped>
.text-center {
  text-align: center
}

.compilation .complier-process {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.scope-basics {
  .scope-basic-role {
    list-style: none;
  }
  .scope-process {
    text-align: left;
  }
  .box {
    padding: 0.2rem;
    margin-top: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }
}
</style>