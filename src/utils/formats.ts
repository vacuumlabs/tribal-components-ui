// TODO fix
export const formatMessage = (group: string, key: string, values?: object) => {
  return `${group}-${key}-${JSON.stringify(values)}`
}
