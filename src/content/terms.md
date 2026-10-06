# Allgemeine Geschäftsbedingungen

Stand: 5. Oktober 2026

Thomas Vollstädt, Vollstädt IT Solutions, Marler Str. 200A, 45701 Herten (im Folgenden „Anbieter“)

## § 1 Geltungsbereich

1. Diese Bedingungen gelten für alle Verträge über Leistungen des Anbieters: Angular-Code-Check, Angular-Migration zum Festpreis, sonstige Leistungen zum Festpreis, Pflege sowie Beratung und Softwareentwicklung nach Aufwand.
2. Das Angebot richtet sich ausschließlich an Unternehmer im Sinne von § 14 BGB, juristische Personen des öffentlichen Rechts und öffentlich-rechtliche Sondervermögen. Mit Verbrauchern schließt der Anbieter keine Verträge.
3. Abweichende Bedingungen des Kunden gelten nur, wenn der Anbieter ihnen in Textform zustimmt. Individuelle Vereinbarungen, etwa in einem Angebot oder einer Auftragsbestätigung, gehen diesen Bedingungen vor.
4. Arbeitstage im Sinne dieser Bedingungen sind Montag bis Freitag, ausgenommen gesetzliche Feiertage in Nordrhein-Westfalen. Ein Arbeitstag Aufwand entspricht acht Stunden.

## § 2 Vertragsschluss

1. Darstellungen auf der Website sind kein bindendes Angebot, soweit Absatz 2 nichts anderes bestimmt.
2. Der Zahlungslink für den Code-Check ist ein verbindliches Angebot des Anbieters. Der Kunde nimmt es an, indem er die Bestellung abschließt. Mit der Angabe seines Unternehmens und dessen Umsatzsteuer-Identifikationsnummer bestätigt er, als Unternehmer zu handeln. Bestellt der Kunde den Code-Check auf Rechnung, kommt der Vertrag mit der Auftragsbestätigung des Anbieters in Textform zustande.
3. Für alle anderen Leistungen kommt der Vertrag zustande, wenn der Kunde ein Angebot des Anbieters in Textform annimmt. Die Angebote verweisen auf diese Bedingungen.

## § 3 Angular-Code-Check

1. Der Code-Check umfasst ein Auftaktgespräch von bis zu 30 Minuten per Video, die Analyse des Quellcodes einer Angular-Anwendung (Angular 2 oder neuer) mit einem Arbeitstag Aufwand und ein schriftliches Ergebnis. Das Auftaktgespräch ist Teil des bezahlten Code-Checks und unabhängig vom kostenlosen Kurz-Check, den der Anbieter vorab anbietet.
2. Das Ergebnis ist zugleich das Angebot für die Migration nach § 4. Es nennt den analysierten Stand des Codes (Commit), die Zielversion, die Anzahl der Seiten nach § 4 Abs. 1, die Bibliotheken Dritter und wie sie behandelt werden, die vorhandenen automatisierten Tests und ob sie bestehen, einen Vorschlag für die Abläufe der Klicktests, den Testweg und ob eine Testumgebung nach § 4 Abs. 6 vorhanden ist, die wichtigsten Risiken und den Festpreis. Außerdem nennt es den Preis für ergänzte Seiten nach § 4 Abs. 1 und den Stundensatz nach § 4 Abs. 4, 12 und 13. Fehlt eine Voraussetzung für einen verlässlichen Festpreis, etwa ein reproduzierbarer Build oder eine Möglichkeit zu testen, nennt das Ergebnis stattdessen die fehlende Voraussetzung, eine begründete Aufwandsspanne und einen Vorschlag für das weitere Vorgehen.
3. Der im Ergebnis genannte Festpreis ist ein verbindliches Angebot für den analysierten Stand des Codes. Der Anbieter ist daran drei Monate ab Übergabe des Ergebnisses gebunden. Hat der Kunde den Code seitdem wesentlich verändert, entfällt die Bindung. Der Anbieter nennt dann nach erneuter Sichtung einen neuen Festpreis, den der Kunde annehmen oder ablehnen kann.
4. Der Code-Check bezieht sich auf eine Anwendung in einem Repository. Mehrere Anwendungen, Repositories mit mehreren Anwendungen, AngularJS (1.x) und Anwendungen, die AngularJS und Angular mischen, bietet der Anbieter gesondert an.
5. Der Kunde gewährt dem Anbieter lesenden Zugriff auf den Quellcode und benennt einen Ansprechpartner. Der Anbieter beginnt innerhalb von zwei Wochen nach Zahlungseingang und Zugriff auf den Code und übergibt das Ergebnis innerhalb von zehn Arbeitstagen nach Beginn der Analyse, soweit nichts anderes vereinbart ist. Den Beginn der Analyse teilt er vorab in Textform mit.
6. Beauftragt der Kunde die Migration innerhalb von drei Monaten nach Übergabe des Ergebnisses, rechnet der Anbieter den Preis des Code-Checks voll auf die erste Rate der Migration an.
7. Der Kunde kann bis zum Beginn der Analyse ohne Angabe von Gründen stornieren. Zeigt sich im Auftaktgespräch oder bei der ersten Sichtung des Codes, dass der Code-Check nicht sinnvoll ist oder die Anwendung unter Absatz 4 fällt, kann jede Seite zurücktreten. In diesen Fällen erstattet der Anbieter den vollen Betrag. Danach ist eine Stornierung ohne Grund ausgeschlossen. Die gesetzlichen Rechte des Kunden bei Mängeln oder ausbleibender Leistung bleiben unberührt.

## § 4 Angular-Migration zum Festpreis

1. Gegenstand ist die Umstellung der im Angebot genannten Angular-Anwendung auf die vereinbarte Angular-Version. Umfang und Abgrenzung ergeben sich aus dem Angebot. Der Festpreis deckt die Anwendung im analysierten Stand ab. Die im Angebot genannte Seitenzahl ist Grundlage der Kalkulation und des Seitenvergleichs. Seiten, die der Kunde danach ergänzt, berechnet der Anbieter nach dem im Angebot genannten Seitenpreis. Eine Seite ist eine Route der Anwendung mit eigener Adresse. Routen mit Parametern, etwa `/kunden/:id`, zählen einmal, Dialoge nicht gesondert.
2. Die Migration hebt die Versionen von Angular und den Abhängigkeiten. Architektur und Programmiermuster bleiben, wie sie sind. Umstellungen etwa auf Signals, Standalone-Komponenten, die neue Ablaufsteuerung in Templates oder einen anderen Ansatz für den Anwendungszustand schuldet der Anbieter nur, soweit das Angebot sie nennt. Umstellungen, die die Zielversion zwingend verlangt, sind im Festpreis enthalten.
3. Das Angebot nennt die Bibliotheken Dritter und wie sie behandelt werden. Läuft eine Abhängigkeit mit der Zielversion nicht und war das bei Erstellung des Angebots trotz Prüfung nicht erkennbar, schlägt der Anbieter eine Lösung mit Festpreis vor. Einigen sich die Parteien nicht innerhalb von zehn Arbeitstagen, kann jede Seite kündigen, und der Anbieter rechnet die bis dahin erbrachten Leistungen ab. Lizenzkosten für Bibliotheken Dritter, etwa für neue Hauptversionen kommerzieller Komponenten, trägt der Kunde.
4. Der Anbieter erstellt automatisierte Abnahmetests: einen Vergleich jeder Seite vor und nach der Umstellung, der die Darstellung und die Anfragen an das Backend gegenüberstellt, sowie Klicktests für bis zu fünf Abläufe, die die Parteien vor der Umstellung in Textform festlegen. Weitere Abläufe vergütet der Kunde nach dem im Angebot genannten Stundensatz. Neue Unit-Tests schuldet der Anbieter nicht. Vorhandene automatisierte Tests des Kunden, die vor der Umstellung bestehen, bestehen auch danach. Tests, deren Werkzeug die Zielversion nicht mehr unterstützt, stellt der Anbieter nur um, soweit das Angebot das nennt. Abnahmetests im Sinne von Absatz 7 sind sie nicht.
5. Die Abnahmetests prüfen, dass sich das Verhalten gegenüber dem Stand vor der Umstellung nicht ändert, nicht die fachliche Richtigkeit. Sie laufen vor der Umstellung gegen den bisherigen Stand und danach gegen den neuen Stand. Abweichungen in der Darstellung, die aus neuen Versionen von Bibliotheken folgen und die Bedienung nicht beeinträchtigen, etwa geänderte Abstände oder Farbtöne, sind keine Mängel. Der Anbieter weist sie bei der Fertigstellung aus.
6. Der Kunde stellt eine Testumgebung, Testzugänge ohne Zwei-Faktor-Anmeldung und Testdaten bereit, die sich auf einen festen Stand zurücksetzen lassen. Die Testdaten enthalten keine echten personenbezogenen Daten, soweit die Parteien nichts anderes vereinbaren (§ 11 Abs. 4). Fehlt eine solche Testumgebung, schlägt der Anbieter einen anderen Testweg oder ihren Aufbau mit Festpreis vor; Absatz 3 Satz 3 gilt entsprechend.
7. Ist die Umstellung fertig, teilt der Anbieter das dem Kunden in Textform mit. Maßstab der Abnahme sind die Abnahmetests. Ein Test gilt als bestanden, wenn er keine Abweichung zeigt oder nur Abweichungen nach Absatz 5. Scheitert ein Test an der Testumgebung oder den Testdaten, weist der Anbieter den Kunden unter Angabe der Ursache in Textform darauf hin und wiederholt den Test ohne Aufpreis, sobald der Kunde die Ursache behoben hat. Behebt der Kunde sie nicht innerhalb von zehn Arbeitstagen nach dem Hinweis, bleibt der Test bei der Abnahme außer Betracht. Die Leistung gilt als abgenommen, wenn die Tests bestehen und der Kunde nicht innerhalb von zehn Arbeitstagen nach Zugang der Mitteilung einen wesentlichen Mangel unter dessen Beschreibung in Textform meldet.
8. Bestehen Abnahmetests nicht, bessert der Anbieter ohne Aufpreis nach.
9. Weicht die Anwendung nach der Migration in Abläufen, die die Tests nicht abdecken, vom vorherigen Verhalten ab und beruht das auf der Migration, ist das ein Mangel nach § 6. Solche Abläufe prüft der Kunde vor der Produktivsetzung selbst.
10. Der Anbieter überträgt die bestehende fachliche Logik der Anwendung, etwa Berechnungen und Geschäftsregeln, unverändert. Ihre fachliche Richtigkeit prüft er nicht und schuldet er nicht. Fehler, die vor der Migration bestanden, sind keine Mängel seiner Leistung.
11. Über die Produktivsetzung entscheidet der Kunde. Er prüft die Leistung vorher in einer Testumgebung. Der Anbieter arbeitet nicht im Produktivsystem, soweit nichts anderes vereinbart ist.
12. Änderungen am vereinbarten Umfang, etwa neue Funktionen oder weitere Anwendungen, vergütet der Kunde nach dem im Angebot genannten Stundensatz oder nach einem gesonderten Angebot. Für ergänzte Seiten gilt Absatz 1.
13. Entwickelt der Kunde die Anwendung während der Migration weiter, stimmen die Parteien Zeitpunkte für das Zusammenführen ab. Aufwand für das Zusammenführen über einen Arbeitstag hinaus vergütet der Kunde nach dem im Angebot genannten Stundensatz.

## § 5 Sonstige Leistungen zum Festpreis

1. Für andere Leistungen zum Festpreis, etwa Shopware-Migrationen oder Produktentwicklung, legt das Angebot Umfang, Meilensteine sowie Abnahme und Zahlung je Meilenstein fest.
2. Soweit das Angebot nichts anderes bestimmt, gilt ein Meilenstein als abgenommen, wenn der Kunde nicht innerhalb von zehn Arbeitstagen nach Zugang der Fertigstellungsmitteilung einen wesentlichen Mangel unter dessen Beschreibung in Textform meldet. § 4 Abs. 10 und 12 gelten entsprechend.

## § 6 Mängelansprüche

1. Bei Mängeln einer Werkleistung bessert der Anbieter zunächst nach. Schlägt die Nachbesserung fehl, kann der Kunde mindern oder vom Vertrag zurücktreten. Schadensersatz richtet sich nach § 13.
2. Mängelansprüche verjähren zwölf Monate nach der Abnahme, bei Leistungen ohne Abnahme zwölf Monate nach Übergabe des Ergebnisses. Das gilt nicht in den Fällen des § 13 Abs. 1 und bei arglistig verschwiegenen Mängeln.

## § 7 Pflege

1. Die Leistungen der Pflege, insbesondere Sicherheitsupdates, Aktualisierung der Abhängigkeiten, das jährliche Angular-Update und Reaktionszeiten, ergeben sich aus dem Angebot. Umstellungen, die eine neue Angular-Version zwingend verlangt, gehören zum jährlichen Update.
2. Der Pflegevertrag läuft zwölf Monate ab dem vereinbarten Beginn. Er verlängert sich jeweils um zwölf Monate, wenn ihn keine Seite mit einer Frist von drei Monaten zum Ende der Laufzeit in Textform kündigt.
3. Der Anbieter berechnet die Pflege monatlich im Voraus.

## § 8 Leistungen nach Aufwand

Beratung und Entwicklung nach Aufwand vergütet der Kunde nach dem vereinbarten Stunden- oder Tagessatz. Der Anbieter rechnet monatlich mit einem Tätigkeitsnachweis ab.

## § 9 Preise und Zahlung

1. Alle Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer.
2. Den Code-Check bezahlt der Kunde bei der Bestellung über den Zahlungsdienstleister Stripe mit einer der dort angebotenen Zahlungsarten oder nach Vereinbarung auf Rechnung.
3. Bei der Angular-Migration berechnet der Anbieter 50 % bei Auftrag und 50 % nach Abnahme, bei sonstigen Leistungen zum Festpreis die Meilensteine laut Angebot, soweit nichts anderes vereinbart ist.
4. Rechnungen sind innerhalb von 14 Tagen nach Zugang ohne Abzug zu zahlen.

## § 10 Mitwirkung des Kunden

Der Kunde stellt rechtzeitig die nötigen Zugänge, Informationen, Testkonten und einen Ansprechpartner bereit. Verzögert sich die Mitwirkung, verschieben sich vereinbarte Termine entsprechend.

## § 11 Vertraulichkeit, Datenschutz und Referenzen

1. Beide Seiten behandeln Betriebs- und Geschäftsgeheimnisse der anderen Seite vertraulich, auch nach Ende des Vertrags.
2. Der Anbieter nutzt den Quellcode des Kunden nur für den jeweiligen Auftrag. Beim Code-Check löscht er seine Kopie spätestens 30 Tage nach Übergabe des Ergebnisses.
3. Der Anbieter darf zur Analyse und Bearbeitung Software-Werkzeuge einsetzen, auch KI-gestützte Assistenten und Cloud-Dienste, soweit deren Anbieter den Code vertraulich behandeln und nicht zum Training eigener Modelle verwenden. Der Kunde kann dem vor Vertragsschluss widersprechen. Dann nutzt der Anbieter nur Werkzeuge, die der Kunde freigibt. Verlangt der Kunde den Verzicht erst später, passen die Parteien die Vergütung an.
4. Auf Wunsch schließen die Parteien eine gesonderte Geheimhaltungsvereinbarung. Verarbeitet der Anbieter personenbezogene Daten im Auftrag des Kunden, schließen sie einen Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
5. Der Anbieter darf den Kunden mit Firmennamen und der Art der Leistung, etwa „Angular-Migration“, als Referenz nennen, insbesondere auf seiner Website, in Angeboten und in Anschreiben. Bei Leistungen zum Festpreis gilt das erst nach der Abnahme, für einen Code-Check ohne anschließende Migration gar nicht. Inhalte des Codes, Befunde und Angaben zur Sicherheit der Anwendung veröffentlicht er nicht. Logos, Versionsstände und weitergehende Angaben, etwa ein Fallbeispiel, nutzt er nur mit Zustimmung des Kunden in Textform. Der Kunde kann der Nennung jederzeit in Textform widersprechen, auch schon bei Vertragsschluss. Der Anbieter entfernt sie dann innerhalb von zwei Wochen von seiner Website und nimmt sie nicht in neue Unterlagen auf.

## § 12 Nutzungsrechte

1. Mit vollständiger Zahlung erhält der Kunde an den für ihn erstellten Arbeitsergebnissen, insbesondere Quellcode, Tests, Berichten und Diagrammen, ein ausschließliches, zeitlich und räumlich unbeschränktes Recht, sie zu nutzen, zu bearbeiten und an Dritte weiterzugeben, etwa an Dienstleister oder verbundene Unternehmen.
2. Bis dahin darf der Kunde die Arbeitsergebnisse für Test, Abnahme und Betrieb nutzen. Dieses Recht entfällt, solange er mit einer fälligen Zahlung mehr als 30 Tage im Verzug ist.
3. Allgemeines Wissen, Methoden und Werkzeuge, die der Anbieter unabhängig vom Auftrag entwickelt hat oder nutzt, bleiben beim Anbieter. Soweit sie in die Arbeitsergebnisse einfließen, erhält der Kunde daran ein einfaches, zeitlich unbeschränktes Nutzungsrecht.
4. Für Bibliotheken und Komponenten Dritter, etwa Open-Source-Software, gelten deren Lizenzbedingungen.

## § 13 Haftung

1. Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit, nach dem Produkthaftungsgesetz und soweit er eine Garantie übernommen hat.
2. Bei leichter Fahrlässigkeit haftet der Anbieter nur, wenn er eine wesentliche Vertragspflicht verletzt, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. Die Haftung ist dann auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
3. Für den Verlust von Daten haftet der Anbieter nur in dem Umfang, der auch bei ordnungsgemäßer und regelmäßiger Datensicherung durch den Kunden entstanden wäre.
4. Im Übrigen ist die Haftung ausgeschlossen.

## § 14 Schlussbestimmungen

1. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
2. Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand der Sitz des Anbieters.
3. Die Pflichten nach § 312i Abs. 1 Satz 1 Nr. 1 bis 3 und Satz 2 BGB finden keine Anwendung. Diese Bedingungen kann der Kunde jederzeit unter vollstaedt.it/agb abrufen und speichern.
4. Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
