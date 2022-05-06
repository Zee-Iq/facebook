import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>
          Friends Online
        </Typography>

        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={3} mb={3}>
          Recent Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={7}>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/draufsicht-gesundes-essen-fuer-immunitaet-die-zusammensetzung-erhoeht_23-2148890265.jpg?t=st=1651860704~exp=1651861304~hmac=233c34d590a3827d49919ecc7f09bcad8a6d007b44ee3f181d85c08165d2dcd3&w=1380"
              alt="An image of mixed fruits and vegetables taken from birdseye perspective"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/group-of-friends-dancing-outside-in-the-city_23-2149295713.jpg?t=st=1651843031~exp=1651843631~hmac=d11ef46f4c141d776a2a04279d6cc13170ab6ab62a55f820eb3d36e951ac7a96"
              alt="Dancing People"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/silhouette-fitness-girl-practicing-yoga-on-mountain-with-sun-light_35029-431.jpg?size=626&ext=jpg"
              alt="Woman meditading outside in the sunlight"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/chef-der-lebensmittel-in-der-restaurantkueche-kocht_53876-67.jpg?size=626&ext=jpg&ga=GA1.2.1305926128.1648039737"
              alt="Chef cooking with fire"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/chef-salzt-steak-grillpfanne-frisches-rindfleisch-oder-schweinefleisch-zubereiten_96270-2.jpg?size=626&ext=jpg&ga=GA1.2.1305926128.1648039737"
              alt="Chef seasoning filet of beef"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/frau-verbringt-zeit-mit-ihrem-schwarzen-jungen_23-2149220045.jpg?size=626&ext=jpg&ga=GA1.2.1305926128.1648039737"
              alt="Mom and Baby"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/vektoren-kostenlos/satz-minimalistischer-hand-gezeichneter-fluessiger-formenhintergrund_1017-28223.jpg?size=626&ext=jpg&ga=GA1.2.1305926128.1648039737"
              alt="Mom and Baby"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/ich-bin-froh-dass-ein-dunkelhaeutiger-praller-mann-tanzt-musik-macht-moderne-stereokopfhoerer-hat-positiv-laechelt-und-in-hochstimmung-ist-alles-in-gelber-farbe-sorgloser-typ-hoert-lebhafte-musik_273609-26210.jpg?size=626&ext=jpg&ga=GA1.2.1305926128.1648039737"
              alt="Yellow background, shirt and headphones. Guy enjoying music ."
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/fotos-kostenlos/weibliche-touristen-breiteten-die-arme-aus-und-hielten-ihre-fluegel_1150-7462.jpg?size=626&ext=jpg&ga=GA1.2.1305926128.1648039737"
              alt="Woman in nature feeling free with arms wide open"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={3} >
          Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
