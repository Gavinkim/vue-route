import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/common/Header'

// import UserList from '@/components/UserList'
// import UserDetail from '@/components/UserDetail'
// import UserEdit from '@/components/UserEdit'
// import User from '@/components/User'

//loading routes lazily
const User = resolve=> {
  require.ensure(['@/components/user/User'],()=>{
    resolve(require('@/components/user/User'));
  },'user');
};
const UserList = resolve=> {
  require.ensure(['@/components/user/UserList'],()=>{
    resolve(require('@/components/user/UserList'));
  },'user');
};
const UserEdit = resolve=> {
  require.ensure(['@/components/user/UserEdit'],()=>{
    resolve(require('@/components/user/UserEdit'));
  },'user');
};
const UserDetail = resolve=> {
  require.ensure(['@/components/user/UserDetail'],()=>{
    resolve(require('@/components/user/UserDetail'));
  },'user');
};


Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  },
  routes: [
    {
      path: '',
      name: 'home',
      components: {
        default: Home,
        'header': Header
      }
    },
    {
      path: '/user',
      components: {
        default: User,
        'header': Header
      }, children: [
        { path: '',component: UserList},
        { path: ':id',component: UserDetail, beforeEnter: (to,from,next)=>{
          console.log('inside route setup');
          next();
          }},
        { path: ':id/edit',component: UserEdit, name:'userEdit'}
      ]
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
