import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button on the top right corner of the homepage. Fill in your details, choose a username and password, and click 'Create Account.'"
  },
  {
    question: "Is there a cost to use the basic features?",
    answer: "Our basic features are free to use. However, we offer premium features for an enhanced experience."
  },
  {
    question: "How do I reset my password?",
    answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page and follow the instructions to reset it."
  },
  {
    question: "Can I change my username?",
    answer: "Yes, you can change your username in the account settings. Navigate to 'Settings,' then 'Account,' and select 'Change Username.'"
  },
  {
    question: "How do I log my activities?",
    answer: "To log activities, go to the 'Activities' section, click on 'Log Activity,' and enter the details of your workout or activity."
  },
  {
    question: "Can I track my nutrition intake?",
    answer: "Yes, you can track your nutrition intake by logging your meals in the 'Nutrition' section. Enter the foods you've eaten, and the system will calculate your nutritional intake."
  },
  {
    question: "What additional features are available with the premium subscription?",
    answer: "Premium features include advanced analytics, personalized coaching, and an ad-free experience. Check out our 'Premium' page for more details."
  },
  {
    question: "How do I subscribe to premium?",
    answer: "To subscribe, go to the 'Premium' section, select your preferred plan, and follow the instructions to complete the payment."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support by visiting the 'Support' page and submitting a request or by emailing support@yourwebsite.com."
  },
  {
    question: "Where can I find tutorials and guides?",
    answer: "Tutorials and guides are available in the 'Help Center.' Visit the 'Help' section to access articles, videos, and other resources."
  },
];

const FaqSection = () => {
  return (
    <Container maxWidth="md" style={{marginTop:'80px'}}>
      <Typography variant="h4" component="h1" gutterBottom sx={{marginBottom:'50px',color:'#000066'}}>
        Frequently Asked Questions
      </Typography>
      {faqData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FaqSection;
