import React,{Component} from 'react';
//这样子导入就可以在创建类组件时不用写react.
import ReactDOM from 'react-dom';
import './Tab.css'
import './props.css'
// import './index.css';
// import './3anli.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//第一个案例，react元素渲染
// function Clock(props){
//   return (
//     <div>
//       <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
//     </div>
//   )
// }

// function run(){
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }

// setInterval(run,1000)

//第2个，jsx语言表达式
// function HelloMessage(props) {
// 	return <h1>Hello World!</h1>;
// }

// const element = <HelloMessage />;

// ReactDOM.render(
// 	element,
// 	document.getElementById('example')
// );

// function Study(props){
// 	return <h2>{1+1+3+4+5*6}</h2>;
// }

// ReactDOM.render(
// 	<Study />,
// 	document.getElementById('example1')
// );

// let i = 37.2;

// function Check(props){
// 	return <h2>{i>37.3?'隔离':'居家观察'}</h2>;
// }

// ReactDOM.render(
// 	<Check />,
// 	document.getElementById('example2')
// );

//第三个，react样式和注解

// let exampleStyle = {
//   background:"blue",
//   borderBottom:"10px solid green",
//   'background-image':"url(https://game.gtimg.cn/images/lol/v3/logo-public.png)"
// }
// //style样式中，如果存在多个单词属性的组合，要从第二个单词开始首字母大写，或者不进行大写但需要将属性名用引号标记起来
// let element = (
//   <div>
//     {/*多个类共存的时候要按下面的方式进行书写 */}
//       <h1 style={"abc "+exampleStyle}>lalalalalalalala</h1>
//   </div>
// )

// let classStr2= ['abc2','redBg2'].join(" ")
// let element2 = (
//   <div>
//     {/*  注释必须在括号内的表达式内进行书写  */}
//       <h1 className={classStr2} style={exampleStyle}>lalalalalalalala</h1>
//   </div>
// )

// ReactDOM.render(
//   element2,
//   document.getElementById('root')
// )

//函数式组件
// function Childcom(props){


//     let title = <h2>woshifubiaoti</h2>
//     let weather = props.weather
//     let isGo = weather=='下雨'?"不出门":"出门"

//     return (
//         <div>
//             <h1>函数式组件helloworld</h1>
//             {title}

//             <div>
//                 是否出门？
//                 <span>{isGo}</span>

//             </div>
//         </div>
//     )
// }

//类组件定义
// class HelloWorld extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>类组件定义helloworld</h1>
//                 <h1>hello:{this.props.name}</h1>
//                 <Childcom />
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Childcom weather="出太阳"/>,
//     document.getElementById('root')
// )
  
// ReactDOM.render(
//     <HelloWorld name="老李"/>,
//     document.getElementById('root')
// )


 

//函数式组件使用props
// function HelloMessage(props) {
//     return <h1>Hello {props.name}!</h1>;
// }
 
// const element = <HelloMessage name="Runoob"/>;
 
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

//react状态state
// class Clock extends React.Component{
//     constructor(props){
//         super(props)
//         //状态(数据)-->view
//         //构造函数初始化数据，将需要的进行改变的数据放置到初始化的state中
//         this.state={
//             time:new Date().toLocaleTimeString()
//         }
//     }
    
//     render(){
//         //this.state.time = new Date().toLocaleTimeString();
//         return(
//             <div>
//                 <h1>当前时间:{this.state.time}</h1>
//             </div>
//         )
//     }

//     //生命周期函数,组件渲染完成时的函数
//     componentDidMount(){
//         setInterval(() => {
//             //this.state.time = new Date().toLocaleTimeString();
//             //不要直接修改state数据，直接修改state不会重新调用，需要使用setstate
//             this.setState(
//                 {time:new Date().toLocaleTimeString()}
//             )
//         }, 1000);

//     }
// }

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// )

// setInterval(()=>{
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     )
// },1000)

// class Tab extends React.Component{
//     constructor(props){
//         super(props)
//         //设置state
//         this.state = {
//             c2:"",
//             c1:""
//         }
//         this.clickEvent = this.clickEvent.bind(this)
//     }

//     clickEvent(e){
//         console.log('clickEvent')
//         console.log(e.target.dataset.index)
//         let index = e.target.dataset.index;
//         console.log(this)
//         if(index=='1'){
//             this.setState({
//                 c1:'content active',
//                 c2:'content'
//             })
//         }else{
//             this.setState({
//                 c1:'content',
//                 c2:'content active'
//         })
//     }
//     }

//     render(){
//         return(
//             <div>
//                 <button data-index ="1" onClick={this.clickEvent}>内容一</button>
//                 <button data-index ="2" onClick={this.clickEvent}>内容二</button>
//                 <div className={this.state.c1}>
//                     <h1>neirong1</h1>
//                 </div>
//                 <div className={this.state.c2}>
//                     <h1>neirong2</h1>
//                 </div>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Tab />,
//     document.getElementById('root')
// )




//在父元素中使用state去控制子元素的props从而达到将父元素的数据传递给子元素
// class ParentCom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isActive:true
//         }
//         this.changeShow = this.changeShow.bind(this)
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick = {this.changeShow}>控制子元素显示</button>

//                 <ChildCom isActive={this.state.isActive}/>
//             </div>
//         )
//     }
//     changeShow(){
//         this.setState({
//             isActive:!this.state.isActive
//         })
//     }
// }

// class ChildCom extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         let strClass = null;
//         if(this.props.isActive){
//             strClass = ' active'
//         }else{
//             strClass = ''
//         }

//         return (
//             <div className = {"content"+strClass}>
//                 <h1>woshiziyuansu</h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <ParentCom />,
//     document.getElementById('root')
// )



//数据子传父
// class ParentCom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             childData: null
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
//                 <ChildCom setChildData={this.setChildData} />
//             </div>
//         )
//     }
//     setChildData=(data)=>{
//         this.setState({
//             childData:data
//         })
//     }
// }

// class ChildCom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             msg:"helloworld"
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.sendData}>传递helloworld给父元素</button>
//                 <button onClick={()=>{this.props.setChildData('直接调用props的函数')}}>传递helloworld给父元素</button>
//             </div>
//         )
//     }
//     sendData = ()=>{
//         //console.log(this.state.msg)
//         //将子元素的数值传递给父元素，实际上就是通过调用父元素传递进来的函数
//         this.props.setChildData(this.state.msg)
//     }
// }

// ReactDOM.render(
//     <ParentCom />,
//     document.getElementById('root')
// )


//react中事件状况详解，如何设置默认阻止，以及传递多个参数的具体方式分两种，es6的箭头函数和正常的匿名函数进行多个参数传递
// class ParentCom extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//             return(
//                 <div >
//                     <form action="http://www.baidu.com">
//                         <div className="child" >
//                             <h1>helloworld</h1>

//                             <button onClick={this.parentEvent}>提交</button>
//                         </div>
//                     </form>
//                     {/**使用es6箭头函数传递多个参数的方式 */}
//                     <button onClick={(e)=>{this.parentEvent1('msg:helloworld',e)}}>提交</button>
//                     {/**不使用es6箭头函数传递多个参数的方式 */}
//                     <button onClick={function(e){this.parentEvent1('msg:helloworld',e)}.bind(this)}>提交</button>
//                 </div>
//             )
//         }
    
    
//     parentEvent=(e)=>{
//         console.log(e.preventDefault)
//         e.preventDefault()
//     }
//     parentEvent1=(msg,e)=>{
//         console.log(msg)
//         console.log(e)
//     }
// }

// ReactDOM.render(
//     <ParentCom />,
//     document.getElementById('root')
// )

//react中的条件渲染
//1.直接通过条件运算式（符）返回要进行渲染的JSX对象
// function UserGreet(props){
//     return (<h1>欢迎登陆</h1>)
// }

// function UserLogin(props){
//     return(<h1>请先登录</h1>)
// }

// class ParentCom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isLogin:false
//         }
//     }
//     render(){
//         if(this.state.isLogin){
//             return <UserGreet />
//         }else{
//             return <UserLogin />
//         }
        
//     }
// }

// ReactDOM.render(
//     <ParentCom />,
//     document.getElementById('root')
// )


//2.	通过条件运算得出要进行渲染的JSX对象，再将JSX渲染到模板中
// function UserGreet(props){
//     return (<h1>欢迎登陆</h1>)
// }

// function UserLogin(props){
//     return(<h1>请先登录</h1>)
// }

// class ParentCom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isLogin:false
//         }
//     }
//     render(){
//         let element = null;
//         if(this.state.isLogin){
//             element = <UserGreet />
//         }else{
//             element = <UserLogin />
//         }
//         return(
//             <div>
//                 <h1>这是头</h1>
//                 {element}
//                 <h1>这是三元运算符的操作</h1>
//                 {this.state.isLogin?<UserGreet />:<UserLogin/>}
//                 <h2>这是尾</h2>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <ParentCom />,
//     document.getElementById('root')
// )



//react中列表的渲染
//let arr = ["小明","小黑","小白"]

// let arrHtml = [<li>xiaoming</li>,<li>xiaohei</li>,<li>xiaobai</li>]

// class Welcome extends React.Component{
   
//     render(){
//         return(
//             <div>
//                 <ul>
//                     {arrHtml}
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Welcome />,
//     document.getElementById('root')
// )

//react列表渲染第一种方法，原始方式进行列表渲染

// class Welcome extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             list:[
//                 {
//                     title:"第一节课",
//                     content:"1111111"
//                 },
//                 {
//                     title:"第二节课",
//                     content:"2222222"
//                 },
//                 {
//                     title:"第三节课",
//                     content:"3333333"
//                 }
//             ]
//         }
//     }

//     render(){
//         let listArr = [];
//         for(let i = 0;i<this.state.list.length;i++){
//             let item = (
//                 <li>
//                     <h2>{this.state.list[i].title}</h2>
//                     <p>{this.state.list[i].content}</p>
//                 </li>
//             )
//             listArr.push(item)
//         }
//         return(
//             <div>
//                 <h1>
//                     今天课程内容：
//                 </h1>
//                 <ul>
//                     {listArr}
//                     <li>
//                         <h2>这是标题</h2>
//                         <p>内容</p>
//                     </li>
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Welcome />,
//     document.getElementById('root')
// )

//react列表渲染第二种方法，使用数组的map方法进行，将数组的每一项先按JSX形式进行加工，最后每一项JSX数据形成新的数组再进行渲染
//加入事件
// function ListItem(props){
//     return(
//         <li >
//             <h2>{props.index+1}:ListItem:{props.data.title}</h2>
//             <p>{props.data.content}</p>
//         </li>
//     )
// }

// class ListItem2 extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <li onClick={(e)=>{this.clickEvent(this.props.index,this.props.data.title,e)}}>
//             <h2>{this.props.index+1}:ListItem:{this.props.data.title}</h2>
//             <p>{this.props.data.content}</p>
//         </li>
//         )
//     }
//     clickEvent=(index,title,event)=>{
//         alert(index + "-" + title )
//     }
// }

// class Welcome extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             list:[
//                 {
//                     title:"第一节课",
//                     content:"1111111"
//                 },
//                 {
//                     title:"第二节课",
//                     content:"2222222"
//                 },
//                 {
//                     title:"第三节课",
//                     content:"3333333"
//                 }
//             ]
//         }
//     }

//     render(){
//         let listArr = this.state.list.map((item,index)=>{
//             return(
//                 <ListItem2 key = {index} data = {item} index = {index}></ListItem2>
                
//             )
//         })
//         return(
//             <div>
//                 <h1>
//                     今天课程内容：
//                 </h1>
//                 <ul>
//                     {listArr}
//                     <li>
//                         <h2>这是标题</h2>
//                         <p>内容</p>
//                     </li>
//                 </ul>

//                 <h1>完成复杂且没有用组件的列表渲染操作</h1>
//                 {
//                     this.state.list.map((item,index)=>{
//                         return(
//                             <li key={index} onClick={(event)=>{this.clickFn(index,item.title,event)}}>
//                                 <h2>{index+1}-复杂-{item.title}</h2>
//                                 <p>{item.content}</p>
//                             </li>
//                         )
//                     })
//                 }


//             </div>
//         )
//     }

//     clickFn=(index,title,event)=>{
//         alert(index + "-clickFn-" + title )
//     }
// }

// ReactDOM.render(
//     <Welcome />,
//     document.getElementById('root')
// )


// class ComLife extends Component{
//     constructor(props){
//         super(props)//调用继承Component的构造函数
//         this.state = {
//             msg: "hello world"
//         }
//         console.log("constructor构造函数")
//     }
//     componentWillMount(){
//         console.log("componentWillMount组件将要渲染")
//     }
//     componentDidMount(){
//         console.log("componentDidMount组件渲染完毕")
//     }
//     componentWillReceiveProps(){
//         console.log("componentWillReceiveProps组件将要接收新的state和props")
//     }
//     shouldComponentUpdate(){
//         //如果需要更新就返回true，如果不需要更新就返回false
//         console.log("shouldComponentUpdate进行判断是否要更新内容")
//         if(this.state.msg === "hello world"){
//             return true
//         }else{
//             return false
//         }
        
//     }
//     componentWillUpdate(){
//         console.log("componentWillUpdate组件将要更新")
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate组件更新完毕")
//     }
//     componentWillUnmount(){
//         console.log("componentWillUnmount移除")
//     }
//     render(){
//         console.log("render渲染函数")
//         return(
//             <div>
//                 <h1>{this.state.msg}</h1>
//                 <button onClick={this.changeMsg}>组件更新</button>
//             </div>
//         )
//     }
//     changeMsg=()=>{
//         this.setState({
//             msg:"hello 老李"
//         })
//     }
// }

// class ParentCom extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             isShow:true
//         }
//     }
//     render(){
//         if(this.state.isShow){
//             return (
//                 <div>
//                     <button onClick={this.removeCom}>移除comlife</button>
//                      <ComLife />
//                 </div>
//             )
//         }else{
//             return <h1>将ComLife已移除</h1>
//         }
//     }
//     removeCom=()=>{
//         this.setState({
//             isShow:false
//         })
//     }
// }

// ReactDOM.render(
//     <ParentCom/>,
//     document.getElementById('root')
// )


