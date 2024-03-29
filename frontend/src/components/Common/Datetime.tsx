export default function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const pad = (num: number): string => num.toString().padStart(2, '0');
  
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); 
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
  
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  }