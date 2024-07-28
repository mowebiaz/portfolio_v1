import { CssIcon } from '../../public/icons/CssIcon'
import { FigmaIcon } from '../../public/icons/FigmaIcon'
import { VscodeIcon } from '../../public/icons/VscodeIcon'
import { ResponsiveIcon } from '../../public/icons/ResponsiveIcon'
import { SeoIcon } from '../../public/icons/SeoIcon'
import { FaGithub, FaGitAlt } from 'react-icons/fa'
import { FaHtml5, FaReact, FaAccessibleIcon } from 'react-icons/fa6'
import { SiSass, SiNextdotjs, SiRedux, SiNotion } from 'react-icons/si'
import { IoLogoJavascript, IoRocketSharp } from 'react-icons/io5'
import { MdManageAccounts } from 'react-icons/md'

export const skillsList = [
  {
    title: 'Mes Technos',
    skills: [
      { SvgIcon: FaHtml5, name: 'HTML' },
      { SvgIcon: CssIcon, name: 'CSS' },
      { SvgIcon: SiSass, name: 'Sass' },
      { SvgIcon: IoLogoJavascript, name: 'JavaScript' },
      { SvgIcon: FaReact, name: 'React' },
      { SvgIcon: SiNextdotjs, name: 'Next.js' },
      { SvgIcon: SiRedux, name: 'Redux' },
    ],
  },
  {
    title: 'Mes Outils',
    skills: [
      { SvgIcon: FaGitAlt, name: 'Git' },
      { SvgIcon: FaGithub, name: 'GitHub' },
      { SvgIcon: VscodeIcon, name: 'VSCode' },
      { SvgIcon: FigmaIcon, name: 'Figma' },
      { SvgIcon: SiNotion, name: 'Notion' },
    ],
  },
  {
    title: 'Mais aussi...',
    skills: [
      { SvgIcon: FaAccessibleIcon, name: 'Accessibilité' },
      { SvgIcon: ResponsiveIcon, name: 'Responsive' },
      { SvgIcon: SeoIcon, name: 'SEO' },
      { SvgIcon: IoRocketSharp, name: 'Performances' },
      { SvgIcon: MdManageAccounts, name: 'Gestion de projets' },
    ],
  },
]
