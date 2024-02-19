import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import differenceImg from 'assets/images/Set/difference.svg'
import differenceBAImg from 'assets/images/Set/differenceba.gif'
import unionImg from 'assets/images/Set/union.svg'
import intersectionImg from 'assets/images/Set/intersection.svg'
import symetricdifferenceImg from 'assets/images/Set/symetricdifference.svg'

const ShowData = ({ data }) => {
  return data.map((task, index) => (
    <Grid key={index} container spacing={2} justifyContent="center">
      <label>{task}</label>
    </Grid>
  ))
}

const SetOperations = ({ setA, setB }) => {
  const [difference, setDifference] = useState(new Set())
  const [differenceBA, setDifferenceBA] = useState(new Set())
  const [union, setUnion] = useState(new Set())
  const [intersection, setIntersection] = useState(new Set())
  const [symmetricDifference, setSymmetricDifference] = useState(new Set())

  useEffect(() => {
    const a = setA.map(setText => setText.text)
    const b = setB.map(setText => setText.text)
    setDifference(new Set([...Difference(new Set(a), new Set(b))]))
    setDifferenceBA(new Set([...Difference(new Set(b), new Set(a))]))
    setUnion(new Set([...Union(new Set(a), new Set(b)), ...Union(new Set(b), new Set(a))]))
    setIntersection(new Set([...Intersection(new Set(a), new Set(b)), ...Intersection(new Set(b), new Set(a))]))
    setSymmetricDifference(
      new Set([...SymmetricDifference(new Set(a), new Set(b)), ...SymmetricDifference(new Set(b), new Set(a))])
    )
  }, [setA, setB])

  function Difference(setA, setB) {
    const _difference = new Set(setA)
    for (const elem of setB) {
      _difference.delete(elem)
    }
    return _difference
  }

  function Union(setA, setB) {
    const _union = new Set(setA)
    for (const elem of setB) {
      _union.add(elem)
    }
    return _union
  }

  function Intersection(setA, setB) {
    const _intersection = new Set()
    for (const elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem)
      }
    }
    return _intersection
  }

  function SymmetricDifference(setA, setB) {
    const _difference = new Set(setA)
    for (const elem of setB) {
      if (_difference.has(elem)) {
        _difference.delete(elem)
      } else {
        _difference.add(elem)
      }
    }
    return _difference
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6} md={6}>
        <h1>Diffference A-B</h1>
        <img src={differenceImg} />
        <ShowData data={[...difference]} />
      </Grid>
      <Grid item xs={12} lg={6} md={6}>
        <h1>Diffference B-A</h1>
        <img src={differenceBAImg} />
        <ShowData data={[...differenceBA]} />
      </Grid>
      <Grid item xs={12} lg={6} md={6}>
        <h1>Union</h1>
        <img src={unionImg} />
        <ShowData data={[...union]} />
      </Grid>
      <Grid item xs={12} lg={6} md={6}>
        <h1>Intersection</h1>
        <img src={intersectionImg} />
        <ShowData data={[...intersection]} />
      </Grid>
      <Grid item xs={12} lg={6} md={6}>
        <h1>Symmetric Difference</h1>
        <img src={symetricdifferenceImg} />
        <ShowData data={[...symmetricDifference]} />
      </Grid>
    </Grid>
  )
}

export default SetOperations
