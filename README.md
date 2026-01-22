<p align="center"><img src="./docs/src/public/icon-1024 2.png" width="18%" alt="Ham的Logo"/></p>

<div align="center">
<h1>Ham</h1>
<span>查询课表、成绩、预定运动场馆、预约武汉大学图书馆</span><br><br>
<a href="https://txc.qq.com/products/606034"><img alt="Static Badge" src="https://img.shields.io/badge/Feedback_On-%E5%85%94%E5%B0%8F%E5%B7%A2-2378ff"></a>
</div><br>

### 文档

需要获取使用帮助请[前往文档主页](https://whu-ham.github.io)

### 下载安装

[前往下载地址(Android / iOS)](https://whu-ham.github.io)

### 它能做什么

#### 课程表

- 导入武汉大学课程表
- 自定义课程
- 课程提醒

#### 成绩

- 查询成绩、计算GPA、综测成绩
- 还没有啥数据的查给分

#### 图书馆

- 按照条件筛选、预约图书馆
- 每日自动预约图书馆
- 更改图书馆预约时间

#### 体育场馆预定

- 预约体育场馆(可使用Siri捷径)

#### E卡，校巴

- 快速打开E卡，查看校园巴士到站情况

#### 日程

- 记录你的日程信息

#### 其它

- 课程表、图书馆预约小组件支持

### 它安全吗

放心，Ham并不会将你的学号密码发送到服务器验证。你的账户信息仅保存在本地，你的手机将直接从学校服务器获取数据，而不会通过第三方转发。

当然了，Ham有查给分等功能，需要用到后台服务器。但请放心，Ham在传输你的信息时，务必通过你的同意。而且Ham不会直接传输关键信息（学号、密码等）。你的关键信息（学号等）在进行哈希运算后再传输至服务器，这样我在后台也不知道是谁的成绩。

### 它开源吗

主项目暂不开源，因为：

1. 项目里存在开发者密钥等一些敏感信息
2. 有些代码关乎后台接口安全
3. 技术债太多了，很多代码质量远达不到开源项目的标准

暂时/已经开源的子项目：
1. [成绩计算](https://github.com/whu-ham/ham-score-calculator)(成绩 -> 设置 -> 选择计算方式里的数据来源)
2. [ham-rn](https://github.com/whu-ham/ham-rn)(APP里用到的ReactNative组件大仓)
3. [ham-web](https://github.com/whu-ham/ham-web)(Ham for Web)

目前有计划模块化/重构APP里的部分功能，并开源这些模块（如果时间充足），期待下吧:->
