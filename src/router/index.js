import Vue from 'vue'
import Router from 'vue-router'
import LoverSummary from '@/components/LoverSummary'
import LoverResults from '@/components/LoverResults'

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
    	}
	]
})