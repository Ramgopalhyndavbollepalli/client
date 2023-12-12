import * as React from "react";
import './HomePage.css'
import MenuComponent from "../MenuComponent/MenuComponent";
import Hero from "../Hero/Hero";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinkIcon from '@mui/icons-material/Link';

export default function HomePage() {

  const redirectToLink = (value) => {
    const token = localStorage.getItem('token');
    return token ? value.link.authenticated : value.link.unauthenticated;
  };

  const sections = [
    {
      title: 'Functionality 1',
      description: 'Budgets can be added, edited, and deleted by users.',
      function: 'View Budgets',
      link: {
        authenticated: '/mybudgets',
        unauthenticated: '/signup',
      },
    },
    {
      title: 'Functionality 2',
      description: 'The budgets can be added, edited, or deleted by users',
      function: 'Monthly Budgets',
      link: {
        authenticated: '/monthlybudgets',
        unauthenticated: '/login',
      },
    },
    {
      title: 'Functionality 3',
      description: 'Three visualisations created using their budget data are displayed to users.',
      function: 'Show Visualizations',
      link: {
        authenticated: '/dashboard',
        unauthenticated: '/signup',
      },
    },
  ];

  return (
    <div>
      <MenuComponent />
      <Hero />

      <hr />
      <List sx={{ width: '100%', bgcolor: 'white' }}>
        {sections.map((value) => (
          <ListItem key={value.description} disableGutters>
            <a
              href={redirectToLink(value)}
              style={{ width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              <LinkIcon style={{ marginRight: '10px' }} /> {/* Adjust the icon placement */}
              <ListItemText primary={value.description} />
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
