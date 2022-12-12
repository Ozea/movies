import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { GridContainer } from 'components'
import { Button, Skeleton, TextField, Typography } from '@mui/material'
import CustomButton from 'components/CustomButton'
import { useHistory, useParams } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box } from '@mui/system'
import classNames from 'classnames'
import { formatMovieUrl } from 'utils/movies'
import { getMovieDetails } from 'services/api'
import Wallet from 'assets/wallet.svg'
import Scanner from 'assets/scanner.svg'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    background: theme.palette.white,
    alignItems: 'center',
    width: '125px',
    height: '75px',
    borderRadius: '8px',
    color: 'black',
    border: '2px solid white',
    cursor: 'pointer',
    '&.selected': {
      border: '2px solid blue',
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 2.5rem',
    '& .MuiTextField-root': {
      width: '25ch',
      margin: '0 .75rem 1.25rem',
      color: '#1f2739',
    },
    '& .MuiInputLabel-root': {
      color: '#1f2739',
    },
    '& .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
      color: '#1f2739',
    },
    '& .css-19kvinv-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid rgb(0 0 0 / 61%)',
    },
  },
  submitBtn: {
    margin: '1.5rem .5rem 0',
  },
  details: {
    display: 'flex',
    position: 'relative',
    width: '350px',
    minHeight: '425px',
    '& > img': {
      width: '100%',
      objectFit: 'cover',
    },
  },
  checkoutDetails: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    minHeight: '75%',
    background: 'linear-gradient(to bottom, transparent 0%, black 100%)',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  img: {
    width: '100%',
    height: '300px',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  seat: {
    width: '35px',
    height: '30px',
    borderRadius: '13px 13px 0 0',
    background: '#6bd8b4',
    position: 'relative',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  bookingWrapper: {
    background: 'white',
    position: 'relative',
    width: 'fit-content',
    alignItems: 'center',
    '&:before': {
      content: "''",
      width: '60px',
      height: '65px',
      borderRadius: '50%',
      background: '#0d0d0d',
      position: 'absolute',
      top: '50%',
      left: '0',
      transform: 'translate(-35px, -50%)',
      zIndex: 1,
    },
    '&:after': {
      content: "''",
      width: '60px',
      height: '65px',
      borderRadius: '50%',
      background: '#0d0d0d',
      position: 'absolute',
      top: '50%',
      right: '0',
      transform: 'translate(35px, -50%)',
      zIndex: 1,
    },
  },
}))

export default function Checkout() {
  const classes = useStyles()
  const [selectedPayment, setSelectedPayment] = useState('visa')
  const booking = useSelector((state) => state.booking)
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  const { id } = useParams()
  const history = useHistory()
  const methods = [
    { name: 'visa', src: `${process.env.PUBLIC_URL}/assets/visa.svg` },
    { name: 'paypal', src: `${process.env.PUBLIC_URL}/assets/paypal.svg` },
  ]

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  const selectPayment = (method) => () => setSelectedPayment(method)

  if (loading) return <Skeleton width={200} height={100} />

  return (
    <>
      <Helmet>
        <title>Booking Checkout</title>
      </Helmet>

      <GridContainer p={5} pb={1} alignItems="center">
        <CustomButton onClick={() => history.goBack()} title="Back" icon={ArrowBack} />
        <Typography variant="h3" color="textSecondary" letterSpacing={0.5} ml={2}>
          Booking Checkout
        </Typography>
      </GridContainer>

      <Box display="flex" alignItems="center" className={classes.bookingWrapper} mt={8} mx="auto">
        <Box component="form" className={classes.form} noValidate autoComplete="off" mx={5} p={5} minWidth={525} minHeight={425}>
          <Box display="flex" justifyContent="center" gap={3} mb={2}>
            {methods.map(({ name, src }) => (
              <Box className={classNames(classes.box, { selected: selectedPayment === name })} onClick={selectPayment(name)} key={name}>
                <img src={src} alt={name} />
              </Box>
            ))}
          </Box>
          {selectedPayment === 'visa' ? (
            <>
              <GridContainer>
                <TextField required id="number" label="Card Number" variant="standard" type="number" />
              </GridContainer>
              <GridContainer>
                <TextField required id="expiration" label="Expiration Date" variant="standard" type="number" />
                <TextField required id="cvv" label="CVV" variant="standard" type="number" />
              </GridContainer>
              <GridContainer>
                <TextField required id="name" label="Card Holder Name" variant="standard" />
              </GridContainer>
            </>
          ) : (
            <>
              <GridContainer>
                <TextField required id="email" label="Email" variant="standard" type="email" sx={{ margin: '0 auto !important' }} />
              </GridContainer>
            </>
          )}
          <Button variant="contained" fullWidth className={classes.submitBtn}>
            Confirm Payment
          </Button>
        </Box>

        <Box className={classes.details} borderRadius={1.5}>
          <img src={formatMovieUrl(movie.poster_path)} alt="Poster" />
          <Box className={classes.checkoutDetails} display="flex" justifyContent="flex-end" flexDirection="column" p={3}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h4" color="textSecondary">
                SCREEN 4
              </Typography>
              <Box textAlign="right">
                <Typography variant="h5">December, {booking.date}</Typography>
                <Typography variant="h5">{booking.time}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5">
                Chosen seats
              </Typography>
              <GridContainer>{booking.seats.map((seat) => seat.id).join(', ')}</GridContainer>
            </Box>
            <GridContainer justifyContent="space-between" alignItems="flex-end" gap={1}>
              <Box width={40} height={40}>
                <img src={Wallet} alt="wallet" />
              </Box>
              <Box width={50} height={50}>
                <img src={Scanner} alt="scanner" />
              </Box>
            </GridContainer>
          </Box>
        </Box>
      </Box>
    </>
  )
}
