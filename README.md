# Redux TodoList

**这是一个学习Redux数据流管理的小例子TodoList**
**为了界面美观一些引用了antd**
**项目使用了react-create-app脚手架**

## 记录一 Redux三个小坑

(1) store必须是唯一的，整个项目只有一个store空间  
(2) 只有store能改变自己的内容，reducer不能改变。 reducer里只能接收state，不能改变state  
(3) reducer必须是纯函数  

## 记录二 actionTypes文件 actionCreators文件

(1) actionTypes给每个action的type一一对应的常量  
(2) actionCreators是对action的一种封装  

## 记录三 将UI与业务逻辑分离

利用父子组件的方式将业务逻辑中的数据传递给UI  

## 将UI设计为无状态组件

因为UI中不需调用任何state，因此可以将class和Component拿掉  
无状态组件性能比继承类组件好，因此在项目中要尽量使用无状态组件  

## 如何在redux展现接口请求到的数据

(1) 使用阿里RAP2模拟网络接口  
(2) 使用axios  
(3) 在componentDidMount中请求数据，写法与普通函数一致  

## redux-thunk中间件

(1) 在createStore中引用，applyMiddleware(thunk)  
(2) redux-thunk最重要的思想，是可以接收一个返回函数的action creator  
(3) 可以在该action creator中做异步操作，传递dispatch和getState  