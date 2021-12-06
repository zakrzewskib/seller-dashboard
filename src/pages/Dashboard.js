import { Container, Grid } from '@mui/material';
import React from 'react';
import OfferItem from '../components/OfferItem';
import OffersRanking from '../components/OffersRanking';
import Widget from '../components/Widget';
import SellerChart from '../components/SellerChart';
import Typography from '@mui/material/Typography';

export default function Dashboard(props) {
  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Widget theme={props.theme}>
            <SellerChart key={props.keyToMountAgain} theme={props.theme} />
          </Widget>
        </Grid>

        <Grid item sm={12} md={4}>
          <Widget theme={props.theme}>
            <OffersRanking theme={props.theme} />
          </Widget>
        </Grid>

        <Grid item sm={12} md={4}>
          <Widget theme={props.theme}>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
              Your orders
            </Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim
            earum voluptas. Alias nam nostrum iste doloremque unde. Illum odio
            sequi nulla delectus exercitationem consequatur, eius quis.
            Nesciunt, ea nulla! Quo officiis autem, nobis aliquid sit est
            molestiae ratione animi excepturi tenetur non sapiente harum placeat
            fuga minima ea id? Vero sapiente officiis officia fugiat dolor.
            Praesentium odit molestias id. Molestias omnis laboriosam obcaecati
            atque molestiae, distinctio voluptate recusandae ab excepturi, velit
            officia quam non, harum esse eius incidunt hic eveniet. Iste
            aspernatur ut molestias esse reprehenderit reiciendis accusantium
            aperiam? Magni consectetur iure dolorum inventore officia illo quos
            asperiores voluptate, fugiat facere saepe laborum quidem incidunt
            obcaecati pariatur eius quasi consequatur rerum nostrum ipsam cum
            architecto blanditiis? Eligendi, atque sit! A magnam dolor unde
            asperiores natus quidem nemo voluptatum omnis saepe. Earum, at,
            minus similique id voluptatibus, quod quisquam porro veniam nam
            temporibus nisi eum molestias eveniet nemo perferendis fugit! Enim
            modi quia expedita ullam repellat sit eum adipisci assumenda atque
            fuga. Dolorem, eos ab hic blanditiis recusandae ducimus voluptas
            possimus distinctio labore modi ipsa iusto perspiciatis itaque. Nam,
            veritatis. Beatae aperiam alias a et ducimus ipsum doloremque unde
            veritatis blanditiis minus, asperiores ab eius ratione mollitia
            harum, distinctio vel labore neque odit molestias vero expedita
            soluta eaque repellendus? Saepe!
          </Widget>
        </Grid>

        <Grid item sm={12} md={8}>
          <Widget theme={props.theme}>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
              Feedback
            </Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ad sit
            itaque aperiam natus. Reiciendis numquam nulla tempore, earum
            repellat saepe molestias perferendis accusamus ad sequi perspiciatis
            obcaecati ipsa quam! Dolores reiciendis cumque quo officiis.
            Quibusdam nemo reiciendis eos. Perspiciatis commodi iure alias est
            dolore nobis sit porro, voluptatibus repudiandae natus quam fuga
            nulla, incidunt optio rem praesentium ad vero. Voluptas aspernatur
            ratione est fugiat repellendus dolores sint voluptatum, nulla
            officia. Adipisci beatae quis, quidem id aspernatur itaque placeat
            doloribus unde velit dolor saepe porro optio nobis nemo laborum
            explicabo. Atque impedit quae magni. Ducimus, blanditiis dicta? Ipsa
            commodi consectetur exercitationem sint possimus dolores officiis
            perferendis, natus dolor itaque quae beatae aperiam totam cum odio,
            doloribus distinctio tenetur iusto reprehenderit. Aut saepe rem,
            nihil adipisci eveniet ex veritatis ea, pariatur totam, in harum
            quasi. Nostrum voluptas odit nisi eaque? Rem saepe minima, provident
            aut veniam accusantium odit quisquam adipisci accusamus. At sed
            cupiditate nam recusandae, sint animi id? Quis repudiandae nemo
            ratione, delectus aspernatur eligendi vitae voluptatum harum aut
            eius laboriosam debitis sapiente ab, asperiores consequuntur labore,
            iusto et ea? Ullam non doloremque, animi adipisci dolores corporis
            mollitia facilis perferendis veniam quis, facere itaque dignissimos.
            Modi consequatur repudiandae tenetur sapiente architecto laboriosam
            voluptatibus. A ea temporibus, explicabo aspernatur iusto provident.
          </Widget>
        </Grid>

        <Grid item sm={12} md={6}>
          <Widget theme={props.theme}>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
              Quality
            </Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            quasi illo dolorem voluptas earum accusantium totam, molestias
            incidunt, corporis nam minima illum optio atque doloribus dolorum
            corrupti beatae. Error, blanditiis. Velit eligendi cupiditate eius
            ab temporibus molestias mollitia laboriosam reprehenderit modi, quod
            consequatur obcaecati quas harum, quasi asperiores numquam, ad
            praesentium quos voluptas suscipit explicabo optio necessitatibus
            odio! Ducimus, sit. Quaerat maiores architecto in dicta a.
            Repudiandae dolorem at quibusdam cumque incidunt perferendis ratione
            fugit non molestiae, accusamus sint soluta, eos est ducimus quidem
            atque labore illum dolor, a aspernatur. Autem vel commodi deserunt
            nostrum libero fugit dolor error illum consequuntur cupiditate minus
            maiores non reiciendis perspiciatis quia, perferendis nobis mollitia
            impedit nemo placeat amet! Laboriosam eligendi cum provident
            maiores! Esse odit quo vel temporibus? Vitae, ab praesentium,
            exercitationem quos laboriosam eius in laudantium enim voluptatum,
            nihil ipsa quia architecto. Saepe quia adipisci accusantium quae,
            natus aperiam odit laudantium culpa? Nisi hic ut dolorem distinctio
            libero esse, placeat, ratione ipsam ipsa autem, explicabo tempora
            totam provident quis voluptate ducimus ad consequatur. Quidem libero
            inventore officiis natus? Aspernatur inventore voluptatum optio?
            Nihil aliquid rerum error, asperiores fugiat ipsam animi ducimus
            incidunt nisi commodi modi ad possimus deleniti sit corporis debitis
            numquam aperiam facere accusamus dolor veritatis nam perspiciatis?
            Magnam, ut alias. Incidunt velit voluptas ratione quia? Dolorum
            optio amet ipsum qui nulla quo repellendus suscipit eaque veniam
            fugiat repellat eveniet doloribus temporibus, soluta culpa.
            Voluptate rerum exercitationem dolore dolor deleniti nihil.
            Consequuntur atque, ipsam odio dolorem ipsum nam recusandae porro!
            Molestias, dolorem cumque. Nostrum quos perferendis temporibus
            totam? Dolorem modi distinctio blanditiis veniam numquam quos,
            adipisci ducimus maxime illum perferendis iste!
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}
