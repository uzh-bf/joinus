import animateScrollTo from 'animated-scroll-to'
import Image from 'next/image'
import React from 'react'
import { Icon } from 'semantic-ui-react'
import CodeImage from '../../../public/images/code_example.png'
import KlickerImg from '../../../public/images/projects/klicker.png'
import SegmentContainer from '../SegmentContainer'
import SubscribeForm from './SubscribeForm'

export interface Props {
  backgroundColor: string
}

function Position({ title, description, children, imgSrc, openPositions }) {
  return (
    <div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 order-2 md:order-1">
          <h4 className="text-3xl font-normal font-thesans-bold">{title}</h4>
          <p className="text-xl font-thesans-plain">{description}</p>
          {children}
        </div>
        <div className="relative flex-1 order-1 h-full md:order-2">
          <Image src={imgSrc} layout="responsive" />
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <h4 className="text-xl font-normal font-thesans-bold">
          Offene Stellen als {title}
        </h4>
        <div className="flex flex-col gap-2">
          {openPositions.length === 0 && (
            <div className="p-4 border-2 border-gray-200 border-solid rounded">
              <h5 className="text-lg font-normal font-thesans-plain">
                Aktuell keine Stelle ausgeschrieben
              </h5>
            </div>
          )}
          {openPositions.map((position) => (
            <div
              key={position.title}
              className="p-4 border-2 border-red-700 border-solid rounded"
            >
              <h5 className="mb-2 text-lg font-normal font-thesans-bold">
                {position.title}
              </h5>
              <p>{position.description}</p>
              <div className="flex flex-row flex-wrap items-end justify-between gap-2">
                <div className="flex flex-row gap-2">
                  {position.tags.map((tag) => (
                    <div
                      key={tag}
                      className="px-2 py-1 mt-2 text-gray-600 bg-gray-200 rounded-lg md:mt-0"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <a
                  className="text-red-700"
                  href="#"
                  onClick={() =>
                    animateScrollTo(document.querySelector('#application'))
                  }
                >
                  <Icon name="chevron down" size="large" /> Zur Bewerbung
                </a>
              </div>{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PositionSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="positions"
      title="Positionen am IBF"
      nextUp="#technologies"
      backgroundColor={backgroundColor}
    >
      <div className="flex flex-col gap-16 md:gap-24">
        <Position
          title="Junior IT"
          description="IT-Fachkraft für technische Unterstützung und Umsetzung von neuen
          Inhalten"
          imgSrc={CodeImage}
          openPositions={[
            {
              title: 'Junior eLearning und eAssessment (Teaching Center)',
              description: `Du arbeitest mit unserem eigenentwickelten Kurs-CMS (React, Strapi), um die bestmöglichen eLearning-Kurse für unsere Studierenden bereitzustellen.
                Du arbeitest dich in die Web-Entwicklung mit HTML/CSS/JS und React ein und gestaltest/entwickelst mit, wenn wir unser eLearning/CMS weiter ausbauen.
                Im Bereich eAssessment unterstützt du uns bei der automatisierten Prüfungserstellung und -korrektur mit Python und übernimmst längerfristig auch Verantwortung bezüglich Weiterentwicklung unserer Korrektursoftware.
                Diese Stelle ist gut für dich geeignet, wenn du erste Praxiserfahrungen sammeln möchtest und einen grossen Lernwillen und Interesse an einer längerfristigen Zusammenarbeit hast.`,
              tags: ['eLearning', 'Web Development', 'Python', '20-40%'],
            },
          ]}
        >
          <p>
            Diese Position ist für Studierende, welche ca. im 3. Semester
            Informatik im Haupt- oder Nebenfach studieren und erste
            Programmiererfahrungen haben. Hier entwickelt man beispielsweise
            unsere CMS, Webseiten, und eAssessment-Tools weiter, erstellt neue
            eLearning-Kurse, und unterstützt bei allgemeinen IT-Projekten sowie
            der Erfassung von Inhalten.
          </p>
          <p>
            Es besteht viel Potenzial zur persönlichen Weiterentwicklung (z.B.
            in Richtung fortgeschrittener Web-Entwicklung und Datenanalyse) mit
            zunehmender Übernahme von eigener Projektverantwortung.
          </p>
        </Position>
        <Position
          title="Senior IT"
          description="Entwicklung von Geschäftsapplikationen, WebApps, Games und weiterer Projekte"
          imgSrc={KlickerImg}
          openPositions={[
            {
              title: 'Mid-level Web Developer\n',
              description: `Du arbeitest mit dem IBF Web Team an der Weiterentwicklung der Instituts-Website, um eine moderne benutzerorientierte Präsenz zu schaffen. Die Website basiert auf decoupled React-Komponenten, die Daten aus einem Drupal (PHP) CMS beziehen. Du unterstützt das Team sowohl in der Programmierung der Komponenten als auch in der Wartung & Anpassung des Content Management Frameworks Drupal.\n\n
Du bist mindestens im 4. Semester Informatik und hast schon gewisse Programmiererfahrung (idealerweise Web Technologien & React). Weiter bringst du Freude an Kommunikation mit Instituts-Mitarbeitern sowie Teamfähigkeit mit und bist an einer längerfristigen Zusammenarbeit mit uns interessiert.`,
              tags: ['Drupal', 'Web Development', 'React', 'PHP'],
            },
            {
              title:
                'Projektmitarbeiter:in für innovative Lehrprojekte (Teaching Center)',
              description: `Du arbeitest an Projekten mit, in denen wir innovative Lehrmethoden entwickeln und in der Lehre an der UZH einsetzen und auswerten.
              Zum Beispiel entwickelst du mit am KlickerUZH, den wir im Bereich Gamification erweitern, um die Studierenden vertieft in den Unterricht einzubinden.
              Oder du arbeitest an unserem Projekt zur automatisierten Prüfungskorrektur, in dem wir Tools und Methoden entwickeln und auswerten,
              die den Korrekturprozess von offenen Prüfungsaufgaben mittels Statistiken und Machine Learning unterstützen.
              Natürlich gibt es bei uns immer die Möglichkeit, in Abhängigkeit der eigenen Interessen bei mehreren Projekten zu unterstützen, und stetig dazuzulernen.
              Diese Stelle eignet sich für dich, wenn du bereits Erfahrungen in den Bereichen Web Development (React) oder Data Science (Python) mitbringst, und diese Erfahrungen in die Lehre einbringen möchtest.`,
              tags: [
                'Web Development',
                'React',
                'Python',
                'Data Science',
                '20-40%',
              ],
            },
          ]}
        >
          <p>
            Diese Position ist für Studierende ab dem 5. Semester Informatik im
            Haupt- oder Nebenfach, welche bereits Programmiererfahrung haben,
            bevorzugterweise mit React. Hier arbeitet man in IT-Projekten mit,
            bei welchen WebApps, Games oder andere Produkte implementiert werden
            und hilft bei Erweiterungen und Modernisierung bestehender
            Applikationen sowie bei der Konzeptionierung neuer Ideen.
          </p>
          <p>
            Bei einer Bewerbung für diese Position wirst du von uns eine kleine{' '}
            <i>React Programmier-Challenge</i> erhalten, mit der du deine
            Fähigkeiten beweisen kannst. Das erlaubt uns, beim Interview auf
            nicht aussagekräftige technische Fragen
            (&ldquo;Whiteboard-Coding&rdquo;) zu verzichten :)
          </p>
        </Position>
        <div>
          <h4 className="text-3xl font-normal font-thesans-bold">
            Aktuell keine Position für dich offen?
          </h4>
          <p>
            Wir sind immer auf der Suche nach neuen Talenten. Melde dich bei
            uns, wenn du Interesse hast, mitzuarbeiten.
          </p>
        </div>
      </div>

      <SubscribeForm />
    </SegmentContainer>
  )
}

export default PositionSegment
