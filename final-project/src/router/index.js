import Vue from 'vue'
import Router from 'vue-router'
import LoverSummary from '@/components/LoverSummary'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'LoverSummary',
			component: LoverSummary
		}
	]
})