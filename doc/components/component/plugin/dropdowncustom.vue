<template>
  <div class="doc">
    <h2>DropdownCustom 自定义下拉控件</h2>
    <p>DropdownCustom可以添加自定义的<code>className</code>定义各种不同的模式的下拉控件，<code>className</code>将应用在<code>.h-dropdowncustom-show</code>上，该dom为触发下拉的元素，包含自定义的内容以及右侧展示状态的icon。</p>
    <p>提示：系统自带一个<code>h-text-dropdown</code>的样式。</p>
    <blockquote>由于该样式应用在组件中，所以在调用的<code>vue</code>文件中，<code>style</code>的<code>scope</code>属性将无效。</blockquote>


    <h3>基本调用</h3>
    <example demo="plugins/dropdowncustom1"></example>

    <h3>不同的触发方式</h3>
    <example demo="plugins/dropdowncustom2"></example>

    <h3>是否显示切换的icon</h3>
    <example demo="plugins/dropdowncustom3"></example>

    <h3>下拉显示的位置</h3>
    <p><code>placement</code>: top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</p>
    <example demo="plugins/dropdowncustom4"></example>

    <h3>自定义下拉的位置</h3>
    <p>分别控制left, top的位移</p>
    <example demo="plugins/dropdowncustom6"></example>


    <h3>自定义下拉的控制</h3>
    <example demo="plugins/dropdowncustom5"></example>

    <h3>DropdownCustom 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>trigger</td>
        <td>触发方式</td>
        <td>String</td>
        <td>click, hover, focus</td>
        <td>click</td>
      </tr>
      <tr>
        <td>equalWidth</td>
        <td>是否和触发的dom等宽</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>toggleIcon</td>
        <td>是否显示展示状态的icon</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>width</td>
        <td>自定义menu的宽度</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>menu显示的位置</td>
        <td>Stirng</td>
        <td>
          top, top-start, top-end, <br/>
          bottom, bottom-start, bottom-end, <br/>
          left, left-start, left-end, <br/>
          right, right-start, right-end
        </td>
        <td>bottom-start</td>
      </tr>
      <tr>
        <td>className</td>
        <td>为点击触发的dom添加class</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>位移</td>
        <td>String, Number</td>
        <td>-</td>
        <td>
          <div>left, top</div>
          <div>10</div>
          <div>'10%'</div>
          <div>'10, 10'</div>
          <div>'10%, 10'</div>
          <div>'10 + 10%'</div>
          <div>'10 - 5vh + 3%'</div>
          <div>'-10px + 5vh, 5px - 6%'</div>
        </td>
      </tr>
    </table>


    <h3>DropdownCustom 方法</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>udpate</td>
        <td>更新dropdown的位置</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>关闭dropdown</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components:{
  }
}
</script>
