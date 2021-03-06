import {Model,Control,Sync,View,page,action,noenumerable} from '../../src/index.js'
import Immutable from 'immutable'

@Model
class TestModel {
    static __name = 'test'
    static age = 18
    static xq = null
    constructor(){
       
    }
}



@Control(TestModel)
class TestControl {
    //Object.defineProperty(target, key, descriptor);
    constructor(){

    }
    @action
    saveTest(data,dispatch){
        //this.getChange()('age', 10)
        this.update('age','ajax改变的age：'+this.getAge() || data.age) 

        /*data.age = 'ajax改变的age：'+data.age
        action.showTest()
        return {
            type:'save',
            data:data
        }*/
    }
    @action
    insertTest(path,data,dispatch,model){
        
          this.save(path,data)
    }
    getAge(){
        return 110
    }
}


import React, { Component /*,PropTypes*/} from 'react'


@View(TestControl)
class TestComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        // setTimeout(()=>{
            this.props.saveTest({
                age:100
            })
            this.props.insertTest('xq.test.name','insert-xiaomin')
        // },1000)

    }

    static defaultProps={}

    render() {

        console.log('age:',this.props.testmodel.get('age') )
        return (
            <div>
                {this.props.testmodel.get('age')}
                <span style={{color:'red'}}>{this.props.testmodel.getIn(['xq','test','name'])}</span>
            </div>
        )
    }
}

page(TestComponent)

