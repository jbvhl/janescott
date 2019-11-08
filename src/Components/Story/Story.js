import React from "react";
import { Link } from "react-router-dom";

class Story extends React.Component {
  render() {
    return (
      <div>
        <h1>Our Story</h1>
        <h4>
          Our storied and quirky relationship began way before meeting each
          other four years ago at Scott’s birthday celebration. We first met
          when we were 6 or 7 years old at our mutual family friend’s wedding
          and ran around unaware of who we were playing with. From then on, our
          fate was ingrained to meet once again 16 years later. It began with
          some innocent twitter direct messages inclusive of lying about origins
          of birth places (Jane) and cooking abilities (Scott), all of which led
          to an agreement to go on our first date.{" "}
        </h4>
        <p>
          Scott – “I actually had planned our date within a matter of minutes. I
          was already thinking of ideas for a date with her weeks before I had
          the nerve to ask. It was just a matter of execution. Step 1. Reserve
          (3) restaurants that were at least $$$ on Yelp. Step 2. Place their
          menus in an envelope, label them numbers 1 thru 3 and place them in my
          glove box along with a few flowers for that extra wOoOw. Step 3. Ask
          her to put something in the glove box to surprise her. Step 4. Spend
          nearly $400 on a drunk date to Uchi where we couldn’t taste the food.
          Easy. From then on, envelope dates became our thing and each one
          consisted of menus of a surprise restaurant every time. Everything
          clicked since Day 1, she checked off every single must have on my
          checklist. Nice Butt (=char10003) Passionate & Driven Sense of Humor
          Smart & Challenging Crazy Beautiful Agree John Wall is the greatest
          player to ever touch a basketball Drives like a Grandma I couldn’t
          imagine my life without her now. Jane is the main character in the
          love story of my life that I hope never ends.
        </p>
        <p>
          Jane - I can speak for the both of us when I say our favorite story to
          tell is of our first date. Aside from the exchange of flirtatious
          direct messages and random late night conversations, our first date is
          the day I fell in love with the idea of being with him. On our first
          date, Scott handed me 3 envelopes to choose from with different menus
          from our list after surprising me with a dozen white roses that he,
          himself, clipped to fit into his glove compartment! The envelope #2 I
          have chosen took us to Uchi and from the moment we walked through
          those doors, I had an instant connection with him. It wasn’t the “oh,
          we have so much in common!” type of connection, but more so that all
          of the bits of the puzzle fell into place - like fate. I’ve never
          engaged with a guy who made showing interest look so easy. I made it a
          quest to embed every single memory from that night and after reliving
          it over and over again in my head, I’ve come to remember it all -
          despite us having finished a whole sake bottle. I remember exactly
          what he wore, how he styled his hair, his first magic trick, the
          feeling of when our hands first interlocked, how hard my chest was
          beating, our first kiss, our waiter named Steven - I can literally go
          on. Besides from the proposal, this day really got a hold on me. But
          here’s the one bit that really tied this perfect little fate package
          altogether - Scott and I actually met about 18 years ago at a family
          friend’s wedding. Being a kid, you are so oblivious to who and what
          you encounter but I think that’s the beauty of our relationship. It
          wasn’t based on chance. Although we weren’t given the opportunity to
          meet periodically in between (or maybe we have, but never noticed),
          I’m convinced that we really had to go through our worst to get and
          appreciate our best. Our relationship within the past 4 years has been
          an absolute joy on the coaster of rollers. However, with the envelope
          dates, blind choosing of drinks, evolving into adults as we take on a
          fixer upper, planning our wedding, late night taco runs and horror
          movies, partaking in karaoke, games and wine (white claw) nights comes
          with our fair share of disagreements, huffs and puffs and silent
          treatments. But through the years, Scott has taught me to be patient,
          to understand the misunderstandings, to take a leap of faith, that
          it’s okay to drive 40 miles over the speed limit, but most
          importantly, to recognize that John Wall is the greatest player to
          ever touch a basketball.
        </p>
        <button id="butt">
          <Link to="/home">Back</Link>
        </button>
      </div>
    );
  }
}

export default Story;
