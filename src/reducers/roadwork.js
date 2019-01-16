const initalState = {
    features: [
      {
        geometry: {
          coordinates: [
            9.61715,
            52.4242
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '30.09.2019 23:59:00',
          ID: '84e4d8bb-58a6-46e0-8d6f-bbb7b906beae',
          IMPACT: 'gesperrt',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'Berenbostel, An der Universitätzwischen Abzweig nach Hannover-Marienwerder und Abzweig nach Berenbostelgesperrt, Dauerbaustelle, bis 30.09.2019',
          NAME: '',
          REASON: 'Dauerbaustelle',
          ROAD: 'An der Universität',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.66235,
            52.38503
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '29.03.2019 23:59:00',
          ID: 'f44b2395-7a33-4116-9a6d-b2ad68d4a713',
          IMPACT: 'halbseitig gesperrt, vorübergehende Regelung durch provisorische Ampelanlagen, für beide Richtungen nur ein Fahrstreifen abwechselnd frei',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'B441 Hannover, Wunstorfer Landstraßezwischen Richard-Lattorf-Straße und Mönckebergalleein beiden Richtungen halbseitig gesperrt, vorübergehende Regelung durch provisorische Ampelanlagen, für beide Richtungen nur ein Fahrstreifen abwechselnd frei, bis voraussichtlich 29.03.2019',
          NAME: '',
          REASON: '',
          ROAD: 'Wunstorfer Landstraße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.66374,
            52.38445
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '29.03.2019 23:59:00',
          ID: 'f44b2395-7a33-4116-9a6d-b2ad68d4a713',
          IMPACT: 'halbseitig gesperrt, vorübergehende Regelung durch provisorische Ampelanlagen, für beide Richtungen nur ein Fahrstreifen abwechselnd frei',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'B441 Hannover, Wunstorfer Landstraßezwischen Richard-Lattorf-Straße und Mönckebergalleein beiden Richtungen halbseitig gesperrt, vorübergehende Regelung durch provisorische Ampelanlagen, für beide Richtungen nur ein Fahrstreifen abwechselnd frei, bis voraussichtlich 29.03.2019',
          NAME: '',
          REASON: '',
          ROAD: 'Wunstorfer Landstraße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.72,
            52.33071
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '31.01.2019 17:00:00',
          ID: '5247b6e6-91c8-4868-8e75-153ed10e5f4e',
          IMPACT: 'gesperrt',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'Kreis Region Hannover, Göttinger Chausseezwischen In der Rehre in Hannover und B3, Göttinger Landstraßein beiden Richtungen gesperrt, Fahrbahnerneuerung, bis 31.01.2019 ca. 17:00 Uhr',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Göttinger Chaussee',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.71843,
            52.33161
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '31.01.2019 17:00:00',
          ID: '5247b6e6-91c8-4868-8e75-153ed10e5f4e',
          IMPACT: 'gesperrt',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'Kreis Region Hannover, Göttinger Chausseezwischen In der Rehre in Hannover und B3, Göttinger Landstraßein beiden Richtungen gesperrt, Fahrbahnerneuerung, bis 31.01.2019 ca. 17:00 Uhr',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Göttinger Chaussee',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.89313,
            52.46796
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '29.03.2019 23:59:00',
          ID: '5d7e03c9-5ec2-4d40-a0a6-30a5cc494637',
          IMPACT: 'gesperrt',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'Kreis Region Hannover, K116zwischen Neuwarmbüchen und Abzweig nach Oldhorstin beiden Richtungen gesperrt, Fahrbahnerneuerung, bis 29.03.2019',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Höfestraße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.89779,
            52.47954
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '29.03.2019 23:59:00',
          ID: '5d7e03c9-5ec2-4d40-a0a6-30a5cc494637',
          IMPACT: 'gesperrt',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'Kreis Region Hannover, K116zwischen Neuwarmbüchen und Abzweig nach Oldhorstin beiden Richtungen gesperrt, Fahrbahnerneuerung, bis 29.03.2019',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Höfestraße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.87999,
            52.50883
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '09.01.2019 00:00:00',
          END: '30.06.2019 23:59:00',
          ID: 'ef0bdac7-5720-41d0-b018-67b2e4020b7c',
          IMPACT: 'gesperrt',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'Kleinburgwedel, Großburgwedeler Straßezwischen Wallstraße und Neues Landin beiden Richtungen gesperrt, Fahrbahnerneuerung, bis 30.06.2019VBA',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Großburgwedeler Straße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.8768,
            52.50627
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '09.01.2019 00:00:00',
          END: '30.06.2019 23:59:00',
          ID: 'ef0bdac7-5720-41d0-b018-67b2e4020b7c',
          IMPACT: 'gesperrt',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'Kleinburgwedel, Großburgwedeler Straßezwischen Wallstraße und Neues Landin beiden Richtungen gesperrt, Fahrbahnerneuerung, bis 30.06.2019VBA',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Großburgwedeler Straße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            10.02401,
            52.45874
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '19.01.2019 23:59:00',
          ID: '8edb9579-a693-4e01-a988-5fa9a98cd3ec',
          IMPACT: 'gesperrt, der Umleitungsbeschilderung folgen',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'L311 Sorgensen, Hauptstraßezwischen Kreisbahnstraße und Riethornwegin beiden Richtungen gesperrt, Fahrbahnerneuerung, der Umleitungsbeschilderung folgen, bis voraussichtlich 19.01.2019',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Hauptstraße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            10.0269,
            52.46132
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '',
          END: '19.01.2019 23:59:00',
          ID: '8edb9579-a693-4e01-a988-5fa9a98cd3ec',
          IMPACT: 'gesperrt, der Umleitungsbeschilderung folgen',
          LOCATION: '',
          LOCATION_DESCRIPTION: 'L311 Sorgensen, Hauptstraßezwischen Kreisbahnstraße und Riethornwegin beiden Richtungen gesperrt, Fahrbahnerneuerung, der Umleitungsbeschilderung folgen, bis voraussichtlich 19.01.2019',
          NAME: '',
          REASON: 'Fahrbahnerneuerung',
          ROAD: 'Hauptstraße',
          SOURCE: 'Tic3InfoRoadworks',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.6955701325577,
            52.3748582668285
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '15.11.2018 00:00:00',
          END: '29.03.2019 00:00:00',
          ID: '311d0b45-8c42-42b6-bf6b-5c07d8c16375',
          IMPACT: 'wie oben beschrieben (Stadtauswärtsseite wieder frei),  Radfahr-U über Fr.-Nause-Str, Kfz-U örtlich mit RB 700 über Kesselstraße  Es bleibt weiterhin bei der weiträumigen Umleitung des einwärtigen Du.-Verkehrs vor der DB-Brücke über CS-Allee/Eichenbrink (aber ab der Aufhebung der Straßenbau-Vollsperrung unter DB-Brücke ab 19.11. nur noch als Empfehlung, die direkte Durchfahrt wird wieder zugelassen).',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Limmer <br /> Strasse: Wunstorfer Straße von Franz-Nause-Straße bis Zimmermannstraße',
          NAME: '',
          REASON: '',
          ROAD: 'Wunstorfer Straße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.7244098198534,
            52.3770659180981
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '22.10.2018 00:00:00',
          END: '01.02.2019 00:00:00',
          ID: '026d91d1-ee7e-4c90-b1c5-ab37667d2c4a',
          IMPACT: 'Vergrößerung Baustelleneinrichtungsfläche ab 05.11.2018 bis 01.02.2019',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Calenberger Neustadt <br /> Strasse: Oeltzenstraße von Brühlstraße bis Gerberstraße',
          NAME: '',
          REASON: '',
          ROAD: 'Oeltzenstraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.82832250020598,
            52.3609328806095
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '08.01.2018 00:00:00',
          END: '30.04.2019 00:00:00',
          ID: '258590e7-7825-42ab-84d7-8e4a7a64744b',
          IMPACT: '1.Die Arbeiten werden in 4 Bauphasen unter halbseitiger Sperrung der Brabeckstraße ausgeführt.',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Bemerode <br /> Strasse: Brabeckstraße von Angerstraße BEM bis Brabeckstraße',
          NAME: '',
          REASON: '',
          ROAD: 'Brabeckstraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.83250633929473,
            52.3612973799905
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '06.10.2018 00:00:00',
          END: '31.01.2019 00:00:00',
          ID: '1ae63001-c399-416e-9b0b-0348e5795f20',
          IMPACT: 'In der Ostfeldstraße ist aufgrund der dortigen Umleitung Haltverbot (Zeichen 283-10=Anfang, Zeichen 283-30=Mitte und Zeichen 283-20=Ende StVO) in Fahrtrichtung Tiergartenstraße aufzustellen. Die Fußgänger-LSA ist in der Ostfeldstraße vor der Einmündung Gropiusstraße und vor der Bus-Ersatzhaltestelle zu installieren.',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Kirchrode <br /> Strasse: Tiergartenstraße von Tiergartenstraße bis Jöhrensstraße',
          NAME: '',
          REASON: '',
          ROAD: 'Tiergartenstraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.70207864877026,
            52.3464590726347
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '11.07.2018 00:00:00',
          END: '31.05.2019 00:00:00',
          ID: '482a13f4-edbf-4d14-9ab1-a470a84219e2',
          IMPACT: 'Die Fahrbahn der Ronneberger Straße bleibt für Durchgangsverkehr voll gesperrt. Die Anfahrbarkeit aller Grundstücke für Anlieger und die Feuerwehranfahrbarkeit im Einsatzfall werden gewährleistet. Die Gehwege werden wechselnd einseitig gesperrt.',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Oberricklingen <br /> Strasse: Ronnenberger Straße von Barsinghäuser Straße bis Ronnenberger Straße',
          NAME: '',
          REASON: '',
          ROAD: 'Ronnenberger Straße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.74510742287623,
            52.3743254246478
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '01.06.2018 00:00:00',
          END: '30.11.2020 00:00:00',
          ID: '33461854-00a8-4546-842a-bb720e215145',
          IMPACT: 'Die Verkehrsführung, Absperrung, Beleuchtung, Beschilderung und Markierung erfolgen im Bereich Thielenplatz gemäß anliegendem Verkehrszeichenplan. Auf der Rückseite der Unterführung erfolgt die Sperrung ab Einmündung Alexanderstraße analog Regelplan B I/17 RSA (Richtlinien für die Sicherung von Arbeitsstellen an Straßen \u0096 Fassung vom Februar 1995). Die Einbahnstraßenregelung der Augustenstraße wird umgedreht, um einen Abfluss zu ermöglichen. Hinsichtlich der zahlreichen weiteren Verkehrsmaßnahmen erfolgen diese gemäß der anliegenden Präsentation des Büros SHP Ingenieure vom 15.12.2017. Die Möglichkeit der Zufahrt / des Zugangs zu allen Grundstücken ist jederzeit zu gewährleisten.Haltverbote dürfen nicht im Bereich von gültigen Halt- oder Parkbeschränkungen auf-gestellt werden. Hiervon ausgenommen sind lediglich Parkplätze an Parkscheinautomaten, Bewohnerparkzonen sowie in Parkscheibenzonen. Behinderten-Parkplätze sind freizuhalten. (An- und Abfahrt muss gewährleistet sein.).',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Mitte <br /> Strasse: Königstraße von Königstraße bis Thielenplatz',
          NAME: '',
          REASON: '',
          ROAD: 'Königstraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.66149102705166,
            52.4133200914083
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '10.10.2018 00:00:00',
          END: '07.02.2019 00:00:00',
          ID: '6cd668b0-c34d-4ab2-b1b2-93785e15fcc6',
          IMPACT: 'Für die ersten beiden Bauabschnitte wird die Baustelleneinrichtung bis ca. 21.12.18 in der Wendeplatte des Hilshofs stehen. Aha fährt die Straße in der Zeit rückwärts an. Die Buschriede ist Schulweg, ensprechend umsichtig sollte an dem Bauende gearbeitet werden',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Stöcken <br /> Strasse: Gemeindeholzstraße von Freudenthalstraße bis Buschriede',
          NAME: '',
          REASON: '',
          ROAD: 'Gemeindeholzstraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.71489446630007,
            52.3291696852575
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '03.11.2018 00:00:00',
          END: '31.01.2019 00:00:00',
          ID: '823e8e09-4c63-492d-9dc7-b6422647e30d',
          IMPACT: 'Der Streckenabschnitt Oberricklinger Tor bis \u0084In der Rehre\u0093 wird zum 02.11.2018 freigegeben. Der Streckenabschnitt zwischen \u0084In der Rehre\u0093 und B3 (Göttinger Landstraße) bleibt weiterhin für Kraftverkehr gesperrt. Für Fußgänger und Radfahrer steht weiterhin ein Notweg durch das Baufeld zur Verfügung. Für die Linienbus-Haltestellen Höhe Friedhofseingang und Höhe Am Grünen Hagen bleiben die Ersatzhaltestellen Höhe Hausnummer 261 bestehen.',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Ricklingen <br /> Strasse: Göttinger Chaussee von Göttinger Chaussee bis In der Rehre',
          NAME: '',
          REASON: '',
          ROAD: 'Göttinger Chaussee',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.7510526002445,
            52.3663680422212
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '26.11.2018 00:00:00',
          END: '30.03.2019 00:00:00',
          ID: 'b83fd48b-31a6-4d5d-9b1d-34a1209b8661',
          IMPACT: 'Für den 1. Bauabschnitt vom 26.11.18 bis ca. 01.02.2019 ist geplant: Vollsperrung \u0084Am Jungfernplan\u0093 (Sackgasse ab Ecke Adelheidstraße, Sperrung hinter der Zufahrt zur Autowerkstatt bis zur Lutherstraße. &#61623; halbseitige Sperrung der Lutherstraße mit Regelung durch Baustellen-LSA ; halbseitige Sperrung der Birkenstraße; die Birkenstraße wird von der Einmündung Lutherstraße bis zur Einmündung Osterstraße als Einbahnstraße (in Richtung Ostermannstraße) ausgewiesen - ca. 25 m von der Einmündung Lutherstraße in Richtung Ostermannstraße ist auf der linken Seite (in Fahrtrichtung) ein Halteverbot vorgesehen (Baustelleneinrichtung). Für den 2. Bauabschnitt vom 04.02.19 ist 30.03.19 ist geplant: ; Vollsperrung Birkenstraße (Sackgasse ab Ecke Ostermannstraße, Sperrung ca. 25 m von Zufahrt zur Lutherstraße; weiterhin halbseitige Sperrung der Lutherstraße  die Straße \u0084 Am Jungfernplan\u0093 wird von der Einmündung Lutherstraße bis zur Einmündung Adelheidstraße als Einbahnstraße (in Richtung Adelheidstraße) ausgewiesen Zur Durchführung der Arbeiten werden folgende straßenverkehrsbehördliche Maßnahmen nach § 45 Abs. 1 StVO angeordnet: 1. Die Verkehrsführung, Absperrung, Beleuchtung, Beschilderung und Markierung erfolgen gemäß beigefügten Verkehrszeichenplänen der Firma B.A.S sowie Regelplan B II/1 RSA für die Gehwege. 2. Als Ersatz für den Fußgängerüberweg wird in die 3-begriffige Baustellen-LSA eine Fuß-gänger-LSA integriert. 3. Sollten die Arbeiten witterungsbedingt ruhen müssen, sind die Sperrungen soweit wie möglich zurückzubauen.',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Südstadt <br /> Strasse: Lutherstraße von Birkenstraße bis Am Jungfernplan',
          NAME: '',
          REASON: '',
          ROAD: 'Lutherstraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.72041220970643,
            52.3974682966577
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '12.04.2018 00:00:00',
          END: '29.03.2019 00:00:00',
          ID: 'ce2533f8-d91e-4980-a042-891d4eafe6c6',
          IMPACT: '-BA2 ab 28.06.18, spätestens 9.00Uhr wird die Einbahnstraße aufgehoben, Verkehr fließt dann (mindestens während der Vollsperrung E-Damm) in beide Richtungen. Gebaut wird zunächst die Bushaltestelle Schulenburger Landstraße südlich Siegmundstraße innerhalb der Absperrung Gleisbaubaustelle',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Hainholz <br /> Strasse: Fenskestraße von Schulenburger Landstraße bis Moorkamp',
          NAME: '',
          REASON: '',
          ROAD: 'Fenskestraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.71776807129323,
            52.3962218477953
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '29.03.2018 00:00:00',
          END: '30.08.2019 00:00:00',
          ID: '1830e6bd-87fa-4eca-b56c-747e50925870',
          IMPACT: '-BA2 ab 28.06.18, spätestens 9.00Uhr wird die Einbahnstraße aufgehoben, Verkehr fließt dann (mindestens während der Vollsperrung E-Damm) in beide Richtungen. Gebaut wird zunächst die Bushaltestelle Schulenburger Landstraße südlich Siegmundstraße innerhalb der Absperrung Gleisbaubaustelle',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Vahrenwald <br /> Strasse: Fenskestraße von Schulenburger Landstraße bis Melanchthonstraße',
          NAME: '',
          REASON: '',
          ROAD: 'Fenskestraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.74653324322918,
            52.3855879435335
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '17.09.2018 00:00:00',
          END: '22.02.2019 00:00:00',
          ID: '5d7378b9-0324-414f-a8e8-b24d7fc4fa58',
          IMPACT: '',
          LOCATION: 'Hannover',
          LOCATION_DESCRIPTION: 'Ortsteil: Oststadt <br /> Strasse: Wedekindstraße von Lister Meile bis Bödekerstraße',
          NAME: '',
          REASON: '',
          ROAD: 'Wedekindstraße',
          SOURCE: 'Stadt Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.91608753975283,
            52.3416938084123
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '10.12.2018 00:00:00',
          END: '31.03.2019 23:59:59',
          ID: '58bdd429-14cc-4357-909a-87694889082c',
          IMPACT: '',
          LOCATION: 'Sehnde',
          LOCATION_DESCRIPTION: '1. Bauabschnitt voraussichtlich bis 25.01.2019<br>Vollsperrung',
          NAME: '',
          REASON: 'grundhafter Straßenausbau',
          ROAD: 'Mühlenstraße',
          SOURCE: 'Region Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.93074450792533,
            52.3478535554446
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '26.11.2018 00:00:00',
          END: '30.06.2019 23:59:59',
          ID: 'c467aa82-9818-49f9-abbb-5f7feab3d94b',
          IMPACT: '',
          LOCATION: 'Sehnde',
          LOCATION_DESCRIPTION: 'vom Im Strauchgarten bis zur Hindenburgstraße (K139)<br>Vollsperrung',
          NAME: '',
          REASON: 'Grundhafte Kanal- und Straßensanierung',
          ROAD: 'Am Nordende',
          SOURCE: 'Region Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            9.93487362568931,
            52.3476920023048
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '24.09.2018 00:00:00',
          END: '09.08.2019 23:59:59',
          ID: '937e7b03-782d-4cfc-9e29-5c938e910684',
          IMPACT: '',
          LOCATION: 'Sehnde',
          LOCATION_DESCRIPTION: 'Abschnittsweise Sanierung der Ortsdurchfahrt (K139) - Abschnitt 1 von der Jahnstraße bis zur Otto-Heise-Straße:Phase 1a: ab 24.09.2018, 09.00 Uhr Jahnstraße - Georg-Weber-Straße (Bushaltestelle)<br>Vollsperrung',
          NAME: '',
          REASON: 'Straßensanierungsarbeiten mit Nebenanalagen',
          ROAD: 'Hindenburgstraße',
          SOURCE: 'Region Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [
            10.0475713298823,
            52.3048433082754
          ],
          type: 'Point'
        },
        properties: {
          ADVICE: '',
          BEGIN: '15.11.2018 00:00:00',
          END: '29.03.2019 23:59:59',
          ID: '57c19060-abbf-46a4-941c-129ddc8da1ce',
          IMPACT: '',
          LOCATION: 'Sehnde',
          LOCATION_DESCRIPTION: 'landwirtschaftlicher Weg südl. der Schanze (zw. Harberstraße und Am Schießstand)<br>Vollsperrung',
          NAME: '',
          REASON: 'punktuelle Grabenverrohrung',
          ROAD: '',
          SOURCE: 'Region Hannover',
          TYPE: 'ROADMAINTENANCE'
        },
        type: 'Feature'
      }
    ],
    type: 'FeatureCollection'
};

export default function(state = initalState , action){
	switch(action.type){
		case 'test':
			return state;
		default:
			return state;
	}
};
