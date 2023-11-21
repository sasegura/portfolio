/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'

// Material Kit 2 React components
import MKBox from 'components/MKBox'
import MKAvatar from 'components/MKAvatar'
import MKButton from 'components/MKButton'
import MKTypography from 'components/MKTypography'

// Images
import profilePicture from 'assets/images/bruce-mars.jpg'

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/* <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox> */}
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Sergio Antonio Segura Fernández</MKTypography>
              </MKBox>

              <MKTypography variant="body1" fontWeight="light" color="text">
                Soy un apasionado del desarrollo web con más de [5 años] de experiencia en la creación de interfaces de
                usuario atractivas y funcionales. Mi enfoque se centra en la implementación de diseños innovadores y la
                optimización del rendimiento para proporcionar a los usuarios experiencias web excepcionales.
                <br />
                <br />
                <MKTypography variant="h4">Habilidades Destacadas:</MKTypography>
                <MKTypography variant="h5">Desarrollo Frontend: </MKTypography>He trabajado extensamente en la
                implementación de interfaces de usuario utilizando tecnologías como HTML, CSS y JavaScript. Además,
                tengo experiencia en el uso de frameworks modernos como React.
                <br />
                <MKTypography variant="h5">Optimización del Rendimiento:</MKTypography> Me enorgullece haber contribuido
                al aumento significativo de la velocidad y eficiencia de las aplicaciones web anteriores mediante la
                identificación y resolución proactiva de problemas de rendimiento.
                <br />
                <MKTypography variant="h5">Colaboración Efectiva:</MKTypography> Disfruto colaborando estrechamente con
                diseñadores y desarrolladores backend para asegurar una integración fluida y una experiencia de usuario
                cohesiva.
                <br />
                <br />
                <MKTypography variant="h4">Ejemplos de Proyectos:</MKTypography>
                <MKTypography variant="h5">BairesDev - Full-time - Frontend Developer</MKTypography>
                Oct 2023 - Presente
                <br />
                Desarrollo de aplicaciones para Inditex Skills: Slack · React Testing Library · TypeScript · Front-End ·
                Redux Saga · Redux · Jest · Git · React.js · JavaScript · Scrum
                <br />
                <MKTypography variant="h5">Roiback - Full-time - Frontend-Developer React</MKTypography>
                Sep 2023 - Oct 2023
                <br />
                Desarrollo de nuevas funcionalidades y mantenimiento de la aplicación de la empresa.
                <br />
                Skills: Front-End Development · React Testing Library · TypeScript · Front-End · Redux · Jest · Git ·
                React.js · Scrum
                <br />
                <MKTypography variant="h5">Op2aim - Full-time - Frontend-Developer React</MKTypography>
                Nov 2021 - Nov 2022 · 1 yr 1 moNov 2021 - Nov 2022 · 1 yr 1 mo Madrid, Comunidad de Madrid,
                EspañaMadrid, Comunidad de Madrid, España
                <br />
                Desarrollo y mantenimientp de la aplicación de la empresa(Optimizador de costes).
                <br />
                Elavoración y mantenimiento de código de calidad ajustandose a los requisitos funcionales y visuales.
                <br />
                Testeo de código.
                <br />
                Optimización y/ó refactorización del codigo previamente desarrollado.
                <br />
                Technologies used: React, Redux, Jest, React-testing-library, Git, Jira, Slack, JavaScript, Scrum, HTML,
                CSS3.…see more
                <br />
                Skills: Jest · redux · Git · Agile Methodologies · React.js
                <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Profile
