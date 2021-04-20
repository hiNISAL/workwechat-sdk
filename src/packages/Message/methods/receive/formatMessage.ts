export const formatMessage = (result: any): any => {
  const message: any = {};
  if (typeof result === 'object') {
    for (const key in result) {
      if (!Array.isArray(result[key]) || result[key].length === 0) {
        continue;
      }
      if (result[key].length === 1) {
        const val = result[key][0];
        if (typeof val === 'object') {
          message[key] = formatMessage(val);
        } else {
          message[key] = (val || '').trim();
        }
      } else {
        message[key] = [];
        result[key].forEach(function (item: any) {
          message[key].push(formatMessage(item));
        });
      }
    }
  }
  return message;
}
