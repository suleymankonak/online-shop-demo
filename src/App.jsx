import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import PageRouter from './components/PageRouter'
import ModeChange from './components/ModeChange'
import DetalisNavList from './components/navbar/DetalisNavList'
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import './css/details.css'
function App() {
  const showAlert = useSelector((store) => store.app.showAlert);

  return (
    <div>
      <Alert
        className={`show-alert-succes ${showAlert ? "wakeup-alert-succes" : ""}`}
        severity="success">
        Ürün Ekleme Başarılı.
      </Alert>

      <ModeChange />
      <DetalisNavList />
      <PageContainer>
        <Header></Header>
        <PageRouter></PageRouter>
      </PageContainer>
    </div>
  )
}

export default App
