angular.module('pioApp').controller('StaffCtrl', function ($scope, $modal) {
    $scope.search = {};
    $scope.highlightFilterIcon = function(section) {
        $scope.search.tags = $scope.search.tags === section ? '' : section;
    };

    $scope.showStaffModal = function(name, position, bio) {
        var bioScope = $scope.$new(true);
        bioScope.name = name;
        bioScope.bio = bio;
        bioScope.position = position;

        var modalInstance = $modal.open({
          templateUrl: 'staffModal.html',
          scope: bioScope
        });
    }



    $scope.sections = ['Design Staff', 'Visual', 'Battery', 'Front Ensemble'];
    $scope.staffMembers = [
      {
        name: 'Adam Hill',
        tags: ['Design Staff', 'Battery'],
        position: 'Executive Director',
        picture: '/images/adam_hill.jpg',
        bio: 'Adam Hill is an educator/percussionist in the Chicagoland area. He is a Music Education Graduate with a percussion emphasis from VanderCook College of Music under the instruction of Kevin Lepper and Dr. Charlie Menghini. Hill is also Director of Percussion, Music Technology, Music Theory, Guitar, and Assistant Marching Band Director at Romeoville High School in Romeoville, IL. Hill is also an active member of the Chicago Bears Drumline, and currently serves as the Director of the Chicago Bulls "Stampede" Drumline.\n\nAdam also has a rich history in Drum Corps International (DCI). He was of The Pioneer Drum and Bugle Corps for 5 years. During this time as a member, he placed in the top ten in DCI, DCM, and PASIC\'s Snare Drum Competitions. In 2002, he placed 2nd in the DCI Snare Solo Competition. After aging out, Hill served as the Percussion Coordinator/Caption Head/Arranger for The Pioneer Drum and Bugle Corps.\n\nHill is also a recipient of the Dr. Rosenthal Excellent teachers award from Vandercook College of Music.\n\nAdam Hill is a very active music arranger, judge, and clinician around the Chicagoland. He is also very proud to be a Pro-Mark, Evans and Mapex/Majestic, Zildjian Percussion endorser.'
      },
      {
        name: 'Don Click',
        tags: ['Design Staff', 'Visual'],
        position: 'Program Coordinator',
        picture: '/images/don_click.jpg',
        bio: 'Don Click is co-founder of the Music City Mystique youth organization and served as the Executive Director until 2006.  He currently serves on the Board of Directors and is a member of the design team.\n\nDon attended the University of North Texas where he earned a degree in Finance. While at UNT, Don spent three years as a member of the UNT indoor drumline. During this time, the drumline won two championships at the Percussive Arts Society International Convention. Don also has deep roots in the Drum and Bugle Corps (DCI) activity. Don was a member of the 1985 Bridgemen, the 1988 Suncoast Sound, and the 1989 Concord Blue Devils.  He has taught and continues to arrange and consult at various high schools throughout the nation and is a sought after judge both for fall marching band competitions as well as Winter Percussion shows.\n\nDon has served as President of the Southeastern Color Guard Circuit where he was formerly the Percussion Coordinator. With Winter Guard International, Don has held the responsibilities of being a member of the Percussion Advisory Board, Percussion Steering Committee, and is a current member of the Board of Directors and Executive Committee serving as Secretary.  He was inducted into the Winter Guard International Hall of Fame in 2010.\n\nDon currently lives in Katy, TX with his wife, Stephani, and two children, Avery and Piper.'
      },
      {
        name: 'Bryan Harmsen',
        tags: ['Design Staff'],
        position: 'Music Arranger',
        picture: '/images/bryan_harmsen.jpg',
        bio: 'Bryan is the owner of Visaudio Designs. He has arranged for and been a clinician and instructor for a number of schools around the country, primarily in Texas. He is a music arranger with a focus in percussion arranging and his arrangements and compositions have helped many ensembles earn numerous gold medals on their local circuits as well as finalist positions and the 2011 PSO SIlver medalist at WGI World Championships. Bryan was a member of a number of drum and bugle corps including Spirit of Atlanta, 2000, Southwind, 2001 and 2002, and The Cavaliers for 2003 and the 2004 championship season.\n\nRecently, Bryan has also started giving clinics and master classes on using the Virtual Drumline sound library from Tapspace Publications. Contact him if you would be interested in setting one up in your area. While not working on music, Bryan also dabbles in web and graphic design and has an affinity for all things on the leading edge of technology. He currently resides in Louisville, Kentucky with his wife Emily and their two dogs and two cats, Roxy, Wilson, Ralphie, and Bella.'
      },
      {
        name: 'Andy Dittrich',
        tags: ['Design Staff', 'Battery'],
        position: 'Battery Caption Head',
        picture: '/images/andy_dittrich.jpg',
        bio: "Andy Dittrich is a percussion instructor and clinician in the Chicagoland area. A graduate of the University of Illinois and a nine-year drum corps veteran, Andy has become a sought-after and respected marching percussion teacher and consultant. His long drum corps career included time with Capitol Sound (Madison, WI), Southwind (Lexington, KY), under T.R. and Patrick Fitz-Gibbon, and the Madison Scouts, under Roger Carter. Andy also spent four years performing with the Illini Drumline of the University of the Illinois. Since aging out, he has performed professionally with the drumlines for both the Chicago Bears and Chicago Bulls.\n\nAndy has served as an instructor or consultant for many of Illinois' top high school programs and since 2009, has been the snare tech for Pioneer Indoor. He was named Battery Caption Head for Pioneer Indoor for the 2014 season, and will continue in this for a 2nd year in 2015."
      },
      {
        name: 'Tom Moffitt',
        tags: ['Design Staff', 'Front Ensemble'],
        position: 'Front Ensemble Caption Head',
        picture: '/images/tom_moffitt.jpg',
        bio: 'Tom Moffitt is currently a student at Columbia College Chicago, pursuing a degree in Audio Arts and Acoustics, and is a member of the Chicago Bulls Stampede Drumline. With over a decade of experience in the fields of percussion, guitar and piano, Tom is primarily a recording musician and music educator in the Chicagoland area. Tom began his experience in the realm of Front Ensemble throughout high school, and continued his endeavors as a member of the 2007 Pioneer Indoor Front Ensemble, as well as the Madison Scouts Front Ensemble from the 2007 to 2011 seasons, serving as section leader in both organizations. Tom also serves as the Sound Engineer for the Madison Scouts Drum and Bugle Corps, a position he has held since 2013. Throughout his music career, Tom has received education from Ben Wahlund, Dr. Greg Beyer, Robert Chappell, Roger Carter, Nick Angelis, Jeff Lee, Dr. Brad Meyer, and Dr. Andrew Bliss.\n\nGiven his tenure as a recording musician, Tom is experienced in professional audio configurations and live sound reinforcement settings. In addition to serving as a Percussion Instructor at Naperville Central High School, the 2015 season will serve as Tom\'s fifth year as a technician for the Pioneer Indoor Front Ensemble, as well as serving as the group\'s electronics engineer.'
      },
      {
        name: 'Dustin Shahidehpour',
        tags: ['Front Ensemble'],
        position: 'Front Ensemble Tech',
        picture: '/images/dustin_shahidehpour.jpg',
        bio: "Dustin Shahidehpour is currently a Software Engineer in the Chicagoland area. Before he chose a life in software, Dustin was a student at the Lawrence Conservatory of Music. There, he studied closely with Dane Richeson, Jamie Ryan, and briefly, Nancy Zeltsman.\n\nDustin also has an extensive background in Drum Corps. From 2007 to 2009 he was a member of the Madison Scouts. During his time there, Dustin served as the section leader for two seasons and was under the instruction of Roger Carter, Dr. Andrew Bliss, and Dr. Brad Meyer. In 2010, he moved onto the Phantom Regiment where he won the Fred Sanford High Percussion Trophy under the direction of Paul and Sandi Rennick. For his age-out year in 2011, Dustin served as the Front Ensemble section leader for the Santa Clara Vanguard, which was also under the direction of the Rennicks.\n\nThis will be Dustin's fourth full-time season with Pioneer Indoor. He is also responsible for building this website!"
      },
      {
        name: 'Megan Francomb',
        tags: ['Design Staff', 'Visual'],
        position: 'Visual Caption Head',
        picture: '/images/megan_francomb.jpg',
        bio: "Megan Francomb began her marching experience as a member of the Colt Cadets at the age of 12. From 2007-2009 she was a member of the Colts Drum and Bugle Corps Cymbal Line, serving as section leader for two years. She also performed with Gateway Indoor Percussion for their 2009 season. After spending a summer interning with Timberlake Playhouse, in 2011 she returned to the Colts for her age-out.\n\nAfter graduating from Illinois Wesleyan University with a B.A. in Theatre Arts and History, she worked with the Finger Lakes Musical Theatre Festival in Auburn, NY. Following the festival, she returned to the Midwest and was thrilled to return to the Colts Youth Organization as the Visual/Cymbal Technician for the Colt Cadets in the 2013 season.\n\nThis will be Megan's second season with Pionner Indoor. Megan is also a Theatre Artist in Chicago. This fall and winter she is excited to be working with the Cuckoo's Theatre Project during their inaugural season. Her theatre work is inspired by Laban Movement Analysis (LMA), which is a method and language for describing, visualizing, interpreting and documenting all varieties of human movement."
      },
      {
        name: 'Tyler Woods',
        tags: ['Visual'],
        position: 'Visual Tech',
        picture: '/images/tyler_woods.jpg',
        bio: 'Tyler Woods is currently living in Chicago, IL as a freelance musician and instructor. Aside from his work with Pioneer Indoor, Tyler is a visual instructor for the Madison Scouts Drum and Bugle Corps, as well as the former high school band director for Luverne High School (MN).\n\nHaving graduated from the University of Minnesota Duluth, under the instruction of Dr. Scott Belck and Dr. Tom Muehlenbeck-Pfotenauer, Tyler’s marching experience includes three years as a member of the Madison Scouts Drum and Bugle Corps. He has been a marching instructor for the UMD Bulldog Marching Band, the Crossmen Drum and Bugle Corps, and is currently working with the Madison Scouts.'
      },
      {
        name: 'Bryan Espinoza',
        tags: ['Battery'],
        position: 'Cymbal Tech',
        picture: '/images/bryan_espinoza.jpg',
        bio: 'No bio available.'
      },
      {
        name: 'Andy Hull',
        tags: ['Battery', 'Visual'],
        position: 'Battery Tech',
        picture: '/images/andy_hull.jpg',
        bio: 'No bio available.'
      },
      {
        name: 'Brian Reilly',
        tags: ['Battery'],
        position: 'Tenor Tech',
        picture: '/images/brian_reilly.jpg',
        bio: 'No bio available.'
      },
      {
        name: 'Bobby Bonslater',
        tags: ['Battery', 'Visual'],
        position: 'Cymbal Tech',
        picture: '/images/bobby_bonslater.jpg',
        bio: 'Bobby Bonslater began his marching arts career in 2001 playing baritone for Racine Scouts Drum and Bugle Corps. He advanced to become the Trumpet Soloist for the 2004 DCI Midwest Div III Champions, Americanos Drum and Bugle Corps, the 2005 DCI Division II/III Grand Champion, East Coast Jazz Drum and Bugle Corps and the Madison Scouts Drum and Bugle Corps, where he aged out in 2007. Bobby continued to march at the all-age competitive level with the 3-time DCA World Champions, Govenaires Drum and Bugle Corps, while serving as Program Coordinator for the Racine Scouts who performed twice as DCI Open Class Semi-finalist under his leadership. In addition to his extensive Drum Corps background, Bobby marched Cymbals for Americanos and Pioneer Indoor Percussion Ensembles earning two WGI World Championships.\n\nThis will be Bobby\'s second year back with Pioneer Indoor. Bobby is currently working with Maine West High School of Des Plaines, IL as Percussion Instructor and Show Designer, Shadow Armada of Oregon, WI as Visual Coordinator/Woodwind Tech and the Govenaires of St. Peter, MN as Brass Caption head.'
      }
      ]
});
