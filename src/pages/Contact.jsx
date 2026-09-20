import { useState } from 'react';
import emailjs from 'emailjs-com';
import { alpha } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import Layout from '../components/layout/Layout';
import Reveal from '../components/Reveal';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useLanguage } from '../i18n/LanguageContext';
import { site } from '../data/site';

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userID = import.meta.env.VITE_EMAILJS_USER_ID;
const emailConfigured = Boolean(serviceID && templateID && userID);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  useDocumentTitle(t('contact.title'));

  const validate = () => {
    const next = {};
    Object.entries(formData).forEach(([field, value]) => {
      if (!value.trim()) next[field] = t('contact.errRequired');
    });
    if (!next.email && !EMAIL_RE.test(formData.email)) next.email = t('contact.errEmail');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    if (!emailConfigured) {
      setToast({ severity: 'warning', message: t('contact.notConfigured') });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setToast({ severity: 'success', message: t('contact.success') });
      setFormData(EMPTY);
    } catch {
      setToast({ severity: 'error', message: t('contact.error') });
    } finally {
      setSending(false);
    }
  };

  const fieldProps = (name) => ({
    name,
    id: name,
    value: formData[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name] ?? ' ',
    fullWidth: true,
    label: t(`contact.${name}`),
  });

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Reveal>
              <Typography variant="overline" color="primary.main">
                {t('contact.eyebrow')}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, mt: 1, mb: 3 }}>
                {t('contact.title')}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.08rem', mb: 4 }}>
                {t('contact.intro')}
              </Typography>

              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {t('contact.elsewhere')}
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                <Button
                  component="a"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                >
                  LinkedIn
                </Button>
              </Stack>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={7}>
            <Reveal delay={120}>
              <Card
                sx={{
                  boxShadow: (theme) => `0 30px 60px ${alpha(theme.palette.common.black, 0.28)}`,
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField {...fieldProps('name')} autoComplete="name" required />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          {...fieldProps('email')}
                          type="email"
                          autoComplete="email"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField {...fieldProps('subject')} required />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField {...fieldProps('message')} multiline rows={6} required />
                      </Grid>
                    </Grid>

                    {!emailConfigured ? (
                      <Alert severity="info" sx={{ mt: 1, mb: 2 }}>
                        {t('contact.notConfigured')}
                      </Alert>
                    ) : null}

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={sending}
                      startIcon={
                        sending ? <CircularProgress size={18} color="inherit" /> : <SendIcon />
                      }
                      sx={{ mt: 1 }}
                    >
                      {sending ? t('contact.sending') : t('contact.send')}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={6000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {toast ? (
          <Alert severity={toast.severity} variant="filled" onClose={() => setToast(null)}>
            {toast.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Layout>
  );
};

export default Contact;
