import {LayoutAnimation} from 'react-native';

export const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

export const validateEmail = value => {
  var emailRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
};

export const validateMobile = value => {
  // var phoneRex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/im;
  var phoneRex =
    /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
  // console.log(value.toString().replace(phoneRex))
  if (phoneRex.test(value)) {
    return true;
  }
  return false;
};

export const validateAlias = value => {
  var aliasRex = /^[a-zA-Z0-9_]{3,}[a-zA-Z]+[0-9]*$/;
  if (aliasRex.test(value)) {
    return true;
  }
  return false;
};

export const validateName = value => {
  var aliasRex = /^[a-zA-Z ]*$/;
  if (aliasRex.test(value)) {
    return true;
  }
  return false;
};
export const validateNumber = value => {
  var aliasRex = /^[0-9]*$/;
  if (aliasRex.test(value)) {
    return true;
  }
  return false;
};
export const validateLength = (value, length) => {
  if (value.length >= length) {
    return true;
  }
  return false;
};

export const toPriceFormat = val => {
  if (val == null) {
    return '';
  }
  let x = val.toString();
  var afterPoint = '';
  if (x.indexOf('.') > 0) afterPoint = x.substring(x.indexOf('.'), x.length);
  val = Math.floor(val);
  return val.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,') + afterPoint;
};

export const isEmpty = param => {
  return (
    param == undefined ||
    param == null ||
    (typeof param === 'string' && param == '')
  );
};

export const shadeColor = (color, percent) => {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};

export const getDays = (startDate, day) => {
  let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const interval = 1000 * 60 * 60 * 24;

  return Array.from({length: day}, (v, i) => {
    let getDate = new Date(startDate.valueOf() + interval * i);

    return {
      day: days[getDate.getDay()],
      date: getDate.getDate(),
      month: getDate.getMonth() + 1,
      year: getDate.getFullYear(),
      fullDate: getDate.toISOString(),
    };
  });
};
export const getCurrentRoute = (state, name = '') =>
  state.index !== undefined && state.routes[state.index].state != undefined
    ? getCurrentRoute(state.routes[state.index].state)
    : state.routes[state.index].name;

export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

// export async function onDisplayNotification() {
//   // Create a channel
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//     lights: true,
//     vibration: true,
//     importance: AndroidImportance.HIGH,
//     vibrationPattern: [300, 400],
//   });

//   // Display a notification
//   await notifee.displayNotification({
//     title: 'Notification Title',
//     body: 'Main body content of the notification',
//     android: {
//       channelId,
//       // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
//     },
//   });
// }

// export function getGreenToRed(percent) {
//   let r =
//     percent < 50 ? 255 : Math.floor(255 - ((percent * 2 - 100) * 255) / 100);
//   let g = percent > 50 ? 255 : Math.floor((percent * 2 * 255) / 100);
//   return 'rgb(' + r + ',' + g + ',10)';
// }

export function getGreenToRed(value) {
  // const hue = Math.round(value);
  // return ['hsl(', hue, ', 50%, 50%)'].join('');
  const r = 255 - (255 * value) / 100;
  const g = (255 * value) / 100;
  return 'rgb(' + r + ',' + g + ',0)';
}

export const LayoutAnimationConfigure = () => {
  LayoutAnimation.configureNext({
    duration: 300,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.easeInEaseOut},
  });
};
