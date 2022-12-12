import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Helmet } from 'react-helmet'
import { GridContainer } from 'components'
import { Box, Skeleton, Typography } from '@mui/material'
import { getMovieDetails } from 'services/api'
import { useHistory, useParams } from 'react-router-dom'
import { formatMovieUrl } from 'utils/movies'
import { AccessTime, ArrowBack, Payments } from '@mui/icons-material'
import CustomButton from 'components/CustomButton'
import { rowsAndTickets } from 'utils/rowsAndTickets'
import classNames from 'classnames'
import CustomLink from 'components/CustomLink'
import { setBooking } from 'reduxToolkit/slices/booking'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pg: {
    borderRadius: '25px',
    padding: '5px 20px',
    border: '1px solid #6bd8b4',
  },
  dates: {
    flexBasis: '48%',
    '& hr': {
      borderColor: '#80808057',
    },
  },
  date: {
    color: 'white',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    textAlign: 'center',
    padding: '5px',
    marginTop: '2px',
    cursor: 'pointer',
  },
  time: {
    color: 'white',
    borderRadius: '5px',
    width: '50px',
    textAlign: 'center',
    padding: '5px',
    marginTop: '2px',
    cursor: 'pointer',
  },
  dateActive: {
    background: '#6bd8b4',
    color: 'black',
  },
  img: {
    overflow: 'hidden',
    width: '100%',
    minHeight: '550px',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  rightPanel: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    aligntItems: 'center',
  },
  chair: {
    width: '35px',
    height: '30px',
    borderRadius: '13px 13px 0 0',
    background: '#ffffffcc',
    position: 'relative',
    margin: '8px 5px',
    cursor: 'pointer',
    '& > span': {
      position: 'absolute',
      bottom: '-5px',
      left: '0',
      borderRadius: '7px',
      background: '#ffffffcc',
      height: '3px',
      width: '100%',
    },
    '&:hover': {
      background: '#cfcfcfcc',
      '& > span': {
        background: '#cfcfcfcc',
      },
    },
  },
  occupied: {
    background: '#F2AA4Cff',
    '& > span': {
      background: '#F2AA4Cff',
    },
    '&:hover': {
      background: '#F2AA4Cff',
      '& > span': {
        background: '#F2AA4Cff',
      },
    },
  },
  selected: {
    background: '#6bd8b4',
    '& > span': {
      background: '#6bd8b4',
    },
    '&:hover': {
      background: '#6bd8b4',
      '& > span': {
        background: '#6bd8b4',
      },
    },
  },
  row: {
    display: 'flex',
    '& > div:nth-of-type(3)': {
      marginRight: '50px',
    },
    '& > div:nth-of-type(8)': {
      marginRight: '50px',
    },
  },
}))

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  const [seats, setSeats] = useState(rowsAndTickets)
  const [selectedDate, setSelectedDate] = useState(7)
  const [selectedHour, setSelectedHour] = useState('10:00')
  const [selectedSeats, setSelectedSeats] = useState([])
  const dispatch = useDispatch()
  const [subTotal, setSubTotal] = useState(0)
  const history = useHistory()
  const classes = useStyles()
  const { id } = useParams()
  const days = [
    { day: 'Mon', date: 5 },
    { day: 'Tue', date: 6 },
    { day: 'Wed', date: 7 },
    { day: 'Thu', date: 8 },
    { day: 'Fri', date: 9 },
    { day: 'Sat', date: 10 },
    { day: 'Sun', date: 11 },
  ]
  const time = [
    { type: '2D', hour: '10:00' },
    { type: '2D', hour: '12:30' },
    { type: '2D', hour: '15:00' },
    { type: '2D', hour: '17:30' },
    { type: '2D', hour: '20:00' },
    { type: '2D', hour: '22:30' },
  ]

  useEffect(() => {
    setLoading(true)
    getMovieDetails(id)
      .then((res) => {
        setMovie(res.data)
        setLoading(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    if (!seats.length) return
    const selected = seats.reduce((acc, row) => {
      const rowSelectedSeats = row.filter((seat) => seat.selected)
      if (!rowSelectedSeats.length) return acc
      return [...acc, ...rowSelectedSeats]
    }, [])
    setSelectedSeats(selected)
    setSubTotal(selected.length * 6.5)
  }, [seats])

  const renderChairs = () => {
    return seats.map((row, i) => {
      return (
        <Box key={i} component="div" className={classes.row} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption" mr={3} pt={1}>
            <b>R{i + 1}</b>
          </Typography>
          <Box key={i} className={classes.row}>
            {row.map(({ id, occupied, selected }) => (
              <Box
                className={classNames(classes.chair, {
                  [classes.occupied]: occupied,
                  [classes.selected]: selected,
                })}
                key={id}
                onClick={chooseSeat(i, id)}
              >
                <span />
              </Box>
            ))}
          </Box>
          <Typography variant="caption" ml={3} pt={1}>
            <b>R{i + 1}</b>
          </Typography>
        </Box>
      )
    })
  }

  const chooseSeat = (rowId, seatId) => () => {
    const newSeats = [...seats]
    newSeats[rowId] = newSeats[rowId].map((seat) => {
      if (seat.id === seatId && !seat.occupied) seat.selected = !seat.selected
      return seat
    })
    setSeats(newSeats)
  }

  const changeDateHandler = (date) => () => {
    setSelectedDate(date)
  }

  const changeHourHandler = (hour) => () => {
    setSelectedHour(hour)
  }

  const checkout = () => {
    dispatch(
      setBooking({
        seats: selectedSeats,
        price: subTotal,
        date: selectedDate,
        time: selectedHour,
        movieId: movie.id,
      })
    )
  }

  if (loading) {
    return <Skeleton width={100} height={50} />
  }

  return (
    <>
      <Helmet>
        <title>Booking - {movie.title}</title>
      </Helmet>

      <GridContainer p={5}>
        <Box sx={{ flex: 1 }}>
          <GridContainer justifyContent="space-between">
            <Box className={classes.flexRow}>
              <CustomButton onClick={() => history.goBack()} title="Back" icon={ArrowBack} />
              <Typography variant="h2" color="textSecondary" ml={2}>
                {movie.title}
              </Typography>
            </Box>
            <Box>
              <Box className={classes.flexRow}>
                <Box sx={{ gap: '5px' }} mr={3} className={classes.flexRow}>
                  <AccessTime /> {movie.runtime} min
                </Box>
                <Typography variant="subtitle1" className={classes.pg}>
                  PG-13
                </Typography>
              </Box>
            </Box>
          </GridContainer>

          <GridContainer mt={5} justifyContent="space-between">
            <Box className={classes.dates}>
              <Typography variant="h5">Wednesday, 7 Dec</Typography>
              <hr />
              <GridContainer gap={3}>
                {days.map(({ day, date }) => (
                  <Box textAlign="center" key={date}>
                    <Typography variant="overline" color="textPrimary">
                      {day}
                    </Typography>
                    <Box onClick={changeDateHandler(date)} className={classNames(classes.date, { [classes.dateActive]: date === selectedDate })}>
                      {date}
                    </Box>
                  </Box>
                ))}
              </GridContainer>
            </Box>
            <Box className={classes.dates}>
              <Typography variant="h5">Show Time</Typography>
              <hr />
              <GridContainer gap={3}>
                {time.map(({ type, hour }) => (
                  <Box textAlign="center" key={hour}>
                    <Typography variant="overline" color="textPrimary">
                      {type}
                    </Typography>
                    <Box onClick={changeHourHandler(hour)} className={classNames(classes.time, { [classes.dateActive]: hour === selectedHour })}>
                      {hour}
                    </Box>
                  </Box>
                ))}
              </GridContainer>
            </Box>
          </GridContainer>

          <GridContainer direction="column" justifyContent="center" alignItems="center" py={7}>
            <Typography variant="body1" letterSpacing="0.25em">
              SCREEN
            </Typography>
            <Box mt={5}>{renderChairs()}</Box>
            <GridContainer mt={5} justifyContent="center" alignItems="center" gap={4}>
              <Box className={classes.flexRow}>
                <Box className={classes.chair}>
                  <span />
                </Box>{' '}
                <Typography variant="body1" pt={0.55} ml={1}>
                  Available
                </Typography>
              </Box>
              <Box className={classes.flexRow}>
                <Box className={classNames(classes.chair, classes.occupied)}>
                  <span />
                </Box>{' '}
                <Typography variant="body1" pt={0.55} ml={1}>
                  Taken
                </Typography>
              </Box>
              <Box className={classes.flexRow}>
                <Box className={classNames(classes.chair, classes.selected)}>
                  <span />
                </Box>{' '}
                <Typography variant="body1" pt={0.55} ml={1}>
                  Selected
                </Typography>
              </Box>
            </GridContainer>
          </GridContainer>
        </Box>

        <Box className={classes.rightPanel} pl={7} pr={3}>
          <Box className={classes.img}>
            <img src={formatMovieUrl(movie.backdrop_path)} alt="Movie backdrop" />
          </Box>
          <Box px={1} py={2}>
            <Typography variant="h5" color="textSecondary">
              Cast
            </Typography>
            <Typography variant="body1">
              {movie.credits.cast
                .slice(0, 5)
                .map(({ name }) => name)
                .join(', ')}
            </Typography>
            <Typography variant="h5" color="textSecondary" mt={1}>
              Tagline
            </Typography>
            <Typography variant="body1" mb={2}>
              {movie.tagline}
            </Typography>
            <GridContainer alignItems="center">
              <Typography variant="h3" color="textSecondary" mr={2}>
                Sub total: {subTotal}$
              </Typography>
              <CustomLink title="Checkout" icon={Payments} to={`/checkout/${movie.id}`} onClick={checkout} disabled={subTotal === 0} />
            </GridContainer>
          </Box>
        </Box>
      </GridContainer>
    </>
  )
}
