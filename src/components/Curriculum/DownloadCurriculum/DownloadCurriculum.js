import { Button } from '../../Button/Button'

const DownloadCurriculum = () => {
    const handleDownload = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/curriculo-dev.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'curriculo-franz.pdf';
        link.click();
      }
    
    return (
      <Button onClick={handleDownload}>
        Baixar PDF
      </Button>
    )
  }
  
  export { DownloadCurriculum }