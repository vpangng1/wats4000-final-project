import Vue from 'vue'
import Router from 'vue-router'
import LoverSummary from '@/components/LoverSummary'
import LoverResults from '@/components/LoverResults'
import LoverProfile from '@/components/LoverProfile'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'LoverSummary',
			component: LoverSummary
		},
		{
		    path: '/LoverResults',
		    name: 'LoverResults',
		    component: LoverResults
    	},
    	{
    		path: '/LoverProfile',
    		name: 'LoverProfile',
    		component: LoverProfile
    	}
	]
})