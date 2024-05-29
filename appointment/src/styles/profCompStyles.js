import { StyleSheet } from 'aphrodite';
import { appColors } from './colors';

export const myProfileStyles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100vw',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '25rem',
    margin: '3rem',
    borderRadius: '25px',
    border: `3px solid ${appColors.accentOpaque}`,
  },
  header: {
    margin: '1rem',
    backgroundColor: appColors.white,
    borderBottom: `1px solid ${appColors.accentOpaque}`,
  },
  ppic: {
    width: '10rem',
    padding: '1rem',
    borderRadius: '50%',
    border: `2px solid ${appColors.primary}`,
  },
  body: {
    marginTop: '1rem',
    backgroundColor: 'none',
    color: appColors.primaryText,
    borderBottom: `none`,
    display: 'flex',
    justifyContent: 'center',
  },
  bodyDiv: {
    textAlign: 'start',
  },
  footer: {
    margin: '1rem',
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: appColors.white,
    borderTop: `none`,
  },
  button: {
    backgroundColor: appColors.white,
    color: appColors.primaryText,
    border: `2px solid ${appColors.accentOpaque}`,
    ':hover': {
      backgroundColor: appColors.accentOpaque,
      color: appColors.white,
    },
  },
});

export const notificationsStyles = StyleSheet.create({
  container: {
    paddingTop: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
    alignItems: 'center',
  },
  card: {
    maxWidth: '25rem',
    width: '20rem',
    height: '70vh',
    borderRadius: '15px',
    border: `2px solid ${appColors.accentOpaque}`,
    overflow: 'scroll',
    padding: '1rem',
  },
  text: {
    color: appColors.primaryText,
    textAlign: 'start',
  },
});

export const appointmentStyles = StyleSheet.create({
  container: {
    height: 'fit-content',
  },
  listContainer: {
    border: `2px solid ${appColors.accent}`,
    borderRadius: '25px',
    padding: '1rem',
    width: '80vw',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    columnGap: '2rem',
    rowGap: '1rem',
    height: '90vh',
    overflow: 'scroll',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
    '@media (min-width: 600px) and (max-width: 900px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (min-width: 900px) and (max-width: 1200px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  card: {
    border: `1px solid ${appColors.accent}`,
    height: 'fit-content',
    width: '100%',
  },
  header: {
    backgroundColor: appColors.accentOpaque,
    color: appColors.white,
    padding: '1rem',
    textAlign: 'center',
    border: 'none',
  },
  body: {
    border: 'none',
    color: appColors.primaryText,
    display: 'flex',
    justifyContent: 'start',
  },
  bodyDiv: {
    textAlign: 'start',
  },

  editButton: {
    margin: '0.5rem',
    backgroundColor: '#39BFD7FF',
    border: 'none',
  },
  deleteButton: {
    backgroundColor: '#D73939',
    border: 'none',
  },
  footer: {
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: appColors.white,
    padding: '.5rem',
  },
  button: {
    backgroundColor: appColors.white,
    color: appColors.primaryText,
    border: `2px solid ${appColors.accentOpaque}`,
    ':hover': {
      backgroundColor: appColors.accentOpaque,
      color: appColors.white,
    },
  },
});
