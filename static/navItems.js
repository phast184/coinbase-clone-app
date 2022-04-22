import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    id: 1,
    title: 'Assets',
    icon: <AiOutlinePieChart />,
  },
  {
    id: 2,
    title: 'Trade',
    icon: <BiTrendingUp />,
  },
  {
    id: 3,
    title: 'Pay',
    icon: <RiCoinsLine />,
  },
  {
    id: 4,
    title: 'For You',
    icon: <MdWeb />,
  },
  {
    id: 5,
    title: 'Learn and earn',
    icon: <AiOutlinePlusCircle />,
  },
  {
    id: 6,
    title: 'Notifications',
    icon: <RiNotification3Line />,
  },
  {
    id: 7,
    title: 'Invite Friends',
    icon: <BsPersonPlus />,
  },
  {
    id: 8,
    title: 'Send a gift',
    icon: <AiOutlineGift />,
  },
]
