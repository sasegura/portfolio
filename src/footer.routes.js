// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'

// Material Kit 2 React components
import MKTypography from 'components/MKTypography'

// Images
import logoCT from 'assets/images/logo-ct-dark.png'
import { pagesRoutes } from 'utils/const/pageRoutes'

const date = new Date().getFullYear()

export default {
  brand: {
    name: 'Material Kit 2',
    image: logoCT,
    route: '/'
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/CreativeTim/'
    },
    {
      icon: <TwitterIcon />,
      link: 'https://twitter.com/creativetim'
    },
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/creativetimofficial'
    },
    {
      icon: <YouTubeIcon />,
      link: 'https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w'
    }
  ],
  pages: pagesRoutes.map(({ name, path }) => ({
    name,
    link: path
  })),
  menus: [
    {
      name: 'resources',
      items: [
        { name: 'illustrations', href: 'https://iradesign.io/' },
        { name: 'bits & snippets', href: 'https://www.creative-tim.com/bits' },
        {
          name: 'affiliate program',
          href: 'https://www.creative-tim.com/affiliates/new'
        }
      ]
    },

    {
      name: 'legal',
      items: [
        {
          name: 'terms & conditions',
          href: 'https://www.creative-tim.com/terms'
        },
        {
          name: 'privacy policy',
          href: 'https://www.creative-tim.com/privacy'
        },
        {
          name: 'licenses (EULA)',
          href: 'https://www.creative-tim.com/license'
        }
      ]
    }
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{' '}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  )
}
