import React, { useCallback } from 'react';
import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography, useScrollTrigger, useTheme } from '@material-ui/core';
import Landing from '../src/Landing';
import Skills from '../src/Skills';
import Projects from '../src/Projects';
import Experience from '../src/Experience';
import About from '../src/About';
import data from '../data.json';
import { darkTheme, lightTheme } from '../src/theme';
import { Brightness4, Brightness7 } from '@material-ui/icons';
const { name, projects } = data

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: "none",
  }
}))

export async function getStaticProps() {
  const baseURI = projects.baseURI
  const repos = projects.repositories
  const reqInit = {
    headers: { 
      'Authorization': `token ${process.env.PAT}`
    }
  }
  const fullRepoData = await Promise.allSettled(
    repos.map(
      async name => {
        const repo = await fetch(baseURI + name, reqInit).then(res => res.json());
        const langs = await fetch(baseURI + name + "/languages", reqInit).then(res => res.json())
        return {
          ...repo,
          languages: Object.getOwnPropertyNames(langs)
        };
      }
    )
  );

  return {
    props: {
      projects: fullRepoData
    },
    revalidate: 60
  }
}

export default function Index({ projects, setTheme }) {

  const classes = useStyles()

  const trigger = useScrollTrigger({ disableHysteresis: true })

  const theme = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.palette.type === 'dark' ? lightTheme : darkTheme)
  }, [setTheme])

  return (
    <div className={classes.root}>
      <AppBar color={!trigger ? "transparent" : "inherit"} className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            { name }
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.type === "dark" ? <Brightness7/> : <Brightness4/>}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
        <Landing />
        <Skills />
        <Projects data={projects}/>
        <Experience/>
        <About/>
      </Container>
    </div>
  );
}
