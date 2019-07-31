function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

function makeDeepCopy(obj) {
  let copy;

  if (isObject(obj)) {
    copy = {};
    Object.entries(obj).forEach(([key, val]) => {
      copy[key] = makeDeepCopy(val);
    })
  } else if (Array.isArray(obj)) {
    copy = obj.map(i => makeDeepCopy(i));
  }

  return copy || obj;
}

