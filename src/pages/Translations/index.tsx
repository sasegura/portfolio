import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import PagesLayout from '../../components/Page'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'

import './i18n'

function Translations() {
  const { t } = useTranslation()
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <PagesLayout title={t('Translations with i18n')} text={t('Application internationalization management')}>
      <Box sx={{ padding: '10px', margin: '0 auto', width: '100%' }}>
        <Button type="submit" variant="contained" onClick={() => changeLanguage('es')}>
          <span style={{ color: 'white' }}>Español</span>
        </Button>
        <Button sx={{ ml: 2 }} type="submit" variant="contained" onClick={() => changeLanguage('en')}>
          <span style={{ color: 'white' }}>English</span>
        </Button>
        <h1>{t('Welcome to React')}</h1>
      </Box>
    </PagesLayout>
  )
}

export default Translations
