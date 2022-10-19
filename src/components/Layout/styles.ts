import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  flex_spaced: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flex_col: {
    flexDirection: 'column',
  },

  Appshell_main: {
    background:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
}));

export default useStyles;
