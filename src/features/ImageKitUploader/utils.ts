export function convertBytes(bytes: number) {
    const one_kilo_byte = 1024
    const one_mega_byte = one_kilo_byte ** 2
  
    if (bytes >= one_mega_byte){
      return `${Math.ceil(bytes/one_mega_byte)} MB`
    }
  
    return `${Math.ceil(bytes/one_kilo_byte)} KB`
  }