import { StyleSheet } from 'aphrodite';
import { appColors } from './colors';

const sharedContainerStyles = {
  margin: '3rem auto 2.5rem auto',
  textAlign: 'center',
  color: appColors.primaryText,
};

const sharedCardStyles = {
  width: '90%',
  maxHeight: '50vh',
  margin: '5%',
  padding: '2rem',
  border: 'none',
  borderRadius: '20px',
};

export const headerStyles = StyleSheet.create({
  navBar: {
    backgroundColor: appColors.accent,
    padding: '1rem',
    maxWidth: '100vw',
    position: 'fixed',
    minHeight: '50px',
    right: 0,
    left: 0,
    zIndex: 1,
  },
  navBarCard: {
    width: '28px',
    height: '28px',
    position: 'absolute',
    backgroundColor: appColors.secondaryDark,
    border: 'none',
  },
  navBarIcon: {
    width: '25px',
    height: '25px',
    position: 'absolute',
  },
  menuCard: {
    width: '28px',
    height: '28px',
    position: 'absolute',
    right: '1rem',
    backgroundColor: 'transparent',
    color: appColors.white,
    border: 'none',
    cursor: 'pointer',
    '@media (min-width: 768px)': {
      display: 'none',
    },
  },
  navBarList: {
    listStyle: 'none',
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    '@media (max-width: 768px)': {
      width: '100%',
      display: 'none',
      flexDirection: 'column',
      alignItems: 'start',
      marginLeft: '30px',
    },
  },
  navBarListOpen: {
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  listItem: {
    textDecoration: 'none',
    color: appColors.primaryLight,
    padding: '1rem',
    cursor: 'pointer',
    '@media (min-width: 769px)': {
      ':hover': {
        backgroundColor: appColors.dusty,
      },
    },
    '@media (max-width: 768px)': {
      textAlign: 'start',
      width: '100%',
      ':hover': {
        backgroundColor: 'none',
        textDecoration: 'underline',
      }
    },
  },
});

export const homeStyles = StyleSheet.create({
  homeContainer: {
    paddingTop: '70px',
  },
  sloganDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slogan: {
    color: appColors.dusty,
    fontSize: '4rem',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  sloganEm: {
    color: appColors.primaryText,
  },
  homeCard: {
    ...sharedCardStyles,
    backgroundColor: appColors.primaryLight,
  },
});

export const servicesStyles = StyleSheet.create({
  servicesContainer: {
    ...sharedContainerStyles,
    zIndex: 0,
  },
  servicesCard: {
    ...sharedCardStyles,
    backgroundColor: appColors.primaryLight,
  },
  gridContainer: {
    margin: '2rem 0 0 3rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    rowGap: '3rem',
  },
  gridContainerCard: {
    width: '100px',
    height: 'auto',
    padding: '1rem',
    border: `2px solid ${appColors.primaryLight}`,
    borderRadius: '10px',
    ':hover': {
      transform: 'scale(1.3)',
      border: `2px solid ${appColors.primaryDark}`,
    },
  },
  gridContainerItem: {
    cursor: 'pointer',
  },
});

export const aboutStyles = StyleSheet.create({
  aboutContainer: {
    ...sharedContainerStyles,
  },
  about: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    textAlign: 'center',
  },
  aboutCard: {
    ...sharedCardStyles,
    backgroundColor: appColors.primaryLight,
  },
});

export const testimonialsStyles = StyleSheet.create({
  testimonialsContainer: {
    ...sharedContainerStyles,
  },
  testimonialsCard: {
    padding: '1rem 3rem',
    margin: '2rem',
    width: '80%',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: appColors.primaryLight,
    '@media (min-width: 769px) and (max-width: 1000px)': {
      width: '100%'
    },
    '@media (min-width: 1000px) and (max-width: 1200px)': {
      width: '90%'
    }
  },
  testimonialsCardHeader: {
    borderRadius: '50%',
    padding: '.2rem',
    backgroundColor: appColors.dusty,
  },
  hr: {
    border: 'none',
    width: '100%',
    height: '3px',
    backgroundColor: appColors.primaryText,
  },
});

export const footerStyles = StyleSheet.create({
  footerDiv: {
    margin: 0,
    color: appColors.white,
    backgroundColor: appColors.dusty,
    paddingTop: '1rem',
  },
  header: {
    textAlign: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    margin: '2rem 0 0 0',
  },
  gridContainerItem: {
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
  hr: {
    border: 'none',
    width: '100%',
    height: '3px',
    backgroundColor: appColors.white,
  },
  col: {
    textAlign: 'center',
    cursor: 'pointer',
  }
});
