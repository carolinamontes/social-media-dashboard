import { v4 } from 'uuid';

export const BIG_CARD_DATA = [
	{
		id: v4(),
		icon: '/images/icon-facebook.svg',
		iconName: 'facebook icon',
		username: '@nathanf',
		number: 1987,
		category: 'Followers',
		arrow: '/images/icon-up.svg',
		update: '12 Today',
		borderColor: '#178FF5'
	},
	{
		id: v4(),
		icon: '/images/icon-twitter.svg',
		iconName: 'twitter icon',
		username: '@nathanf',
		number: 1044,
		category: 'Followers',
		arrow: '/images/icon-up.svg',
		update: '99 Today',
		borderColor: '#1DA1F2'
	},
	{
		id: v4(),
		icon: '/images/icon-instagram.svg',
		iconName: 'instagram icon',
		username: '@realnathanf',
		number: '11k',
		category: 'Followers',
		arrow: '/images/icon-up.svg',
		update: '1099 Today',
		borderColor: {
			colorA: '#DF4896',
			colorB: '#EE877E',
			colorC: '#FDC366'
		}
	},
	{
		id: v4(),
		icon: '/images/icon-youtube.svg',
		iconName: 'youtube icon',
		username: 'NathanF',
		number: 8239,
		category: 'Subscribers',
		arrow: '/images/icon-up.svg',
		update: '144 Today',
		borderColor: '#1DA1F2'
	}
];
