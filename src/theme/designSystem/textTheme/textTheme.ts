import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseXLStyles = {
  fontFamily: "Roobert",
  fontSize: "24px",
};

const baseLGStyles = {
  fontFamily: "Roobert",
  fontSize: "22px",
};

const baseMDStyles = {
  fontFamily: "Roobert",
  fontSize: "18px",
};

const baseSMStyles = {
  fontFamily: "Roobert",
  fontSize: "16px",
};

const baseXSStyles = {
  fontFamily: "Roobert",
  fontSize: "14px",
};

const baseXSSStyles = {
  fontFamily: "Roobert",
  fontSize: "10px",
};

/* XL VARIANTS */
const XLLIGHT = defineStyle({
  ...baseXLStyles,
  fontWeight: 300,
});
const XLREGULAR = defineStyle({
  ...baseXLStyles,
  fontWeight: 400,
});

const XLMEDIUM = defineStyle({
  ...baseXLStyles,
  fontWeight: 500,
});

const XLSEMIBOLD = defineStyle({
  ...baseXLStyles,
  fontWeight: 600,
});

/* LG VARIANTS */
const LGLIGHT = defineStyle({
  ...baseLGStyles,
  fontWeight: 300,
});
const LGREGULAR = defineStyle({
  ...baseLGStyles,
  fontWeight: 400,
});

const LGMEDIUM = defineStyle({
  ...baseLGStyles,
  fontWeight: 500,
});

const LGSEMIBOLD = defineStyle({
  ...baseLGStyles,
  fontWeight: 600,
});

/* MD VARIANTS */
const MDLIGHT = defineStyle({
  ...baseMDStyles,
  fontWeight: 300,
});
const MDREGULAR = defineStyle({
  ...baseMDStyles,
  fontWeight: 400,
});

const MDMEDIUM = defineStyle({
  ...baseMDStyles,
  fontWeight: 500,
});

const MDSEMIBOLD = defineStyle({
  ...baseMDStyles,
  fontWeight: 600,
});

/* SM VARIANTS */
const SMLIGHT = defineStyle({
  ...baseSMStyles,
  fontWeight: 300,
});
const SMREGULAR = defineStyle({
  ...baseSMStyles,
  fontWeight: 400,
});

const SMMEDIUM = defineStyle({
  ...baseSMStyles,
  fontWeight: 500,
});

const SMSEMIBOLD = defineStyle({
  ...baseSMStyles,
  fontWeight: 600,
});

/* XS VARIANTS */
const XSLIGHT = defineStyle({
  ...baseXSStyles,
  fontWeight: 300,
});
const XSREGULAR = defineStyle({
  ...baseXSStyles,
  fontWeight: 400,
});

const XSMEDIUM = defineStyle({
  ...baseXSStyles,
  fontWeight: 500,
});

const XSSEMIBOLD = defineStyle({
  ...baseXSStyles,
  fontWeight: 600,
});

/* xss VARIANTS */
const XSSLIGHT = defineStyle({
  ...baseXSSStyles,
  fontWeight: 300,
});
const XSSREGULAR = defineStyle({
  ...baseXSSStyles,
  fontWeight: 400,
});

const XSSMEDIUM = defineStyle({
  ...baseXSSStyles,
  fontWeight: 500,
});

const XSSSEMIBOLD = defineStyle({
  ...baseXSSStyles,
  fontWeight: 600,
});

export const TextTheme = defineStyleConfig({
  variants: {
    XLLIGHT,
    XLREGULAR,
    XLMEDIUM,
    XLSEMIBOLD,
    LGLIGHT,
    LGREGULAR,
    LGMEDIUM,
    LGSEMIBOLD,
    MDLIGHT,
    MDREGULAR,
    MDMEDIUM,
    MDSEMIBOLD,
    SMLIGHT,
    SMREGULAR,
    SMMEDIUM,
    SMSEMIBOLD,
    XSLIGHT,
    XSREGULAR,
    XSMEDIUM,
    XSSEMIBOLD,
    XSSLIGHT,
    XSSREGULAR,
    XSSMEDIUM,
    XSSSEMIBOLD,
  },
});
