import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const UeberMich = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="section-padding bg-background pt-28 md:pt-36">
        <div className="container-narrow">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
                Über mich
              </p>
              <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">
                Ihre Begleiterin auf dem Weg zu sich selbst
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Als Juristin, Lebens- und Sozialberaterin, systemische Coachin, Mediatorin und Kommunikationstrainerin verbinde ich fachliche Kompetenz mit einem ganzheitlichen Blick auf den Menschen.
                </p>
                <p>
                  Das Leben ist geprägt von Veränderungen, Begegnungen und Erfahrungen, die uns wachsen lassen, uns aber auch vor Herausforderungen stellen können. Manchmal geraten wir dabei aus dem Gleichgewicht, verlieren unsere eigenen Bedürfnisse aus den Augen oder stehen an einem Punkt, an dem wir uns neu orientieren möchten. Gerade in solchen Lebensphasen kann es wertvoll sein, innezuhalten, Gedanken zu ordnen und sich selbst wieder bewusster wahrzunehmen.
                </p>
                <p>
                  Als psychosoziale Beraterin begleite ich Sie mit Einfühlungsvermögen, Wertschätzung und einem ganzheitlichen Blick auf Ihre persönliche Lebenssituation. In meiner Arbeit verbinde ich psychosoziale Beratung mit Coaching und einem ressourcenorientierten Ansatz. Dabei geht es nicht darum, vorgefertigte Lösungen zu finden, sondern gemeinsam herauszuarbeiten, was Sie stärkt, was Ihnen wichtig ist und welcher Weg zu Ihnen und Ihrem Leben passt.
                </p>
                <p>
                  Mir ist es ein besonderes Anliegen, einen geschützten und vertrauensvollen Raum zu schaffen, in dem Sie sich öffnen können, ohne bewertet zu werden. Einen Raum, in dem alles Platz haben darf, was Sie beschäftigt, und in dem neue Perspektiven, innere Klarheit und persönliche Entwicklung entstehen können.
                </p>
                <p>
                  Im Mittelpunkt stehen Sie – mit Ihrer Geschichte, Ihren Gefühlen, Ihren Erfahrungen und all den Möglichkeiten, die in Ihnen liegen.
                </p>
                <p className="pt-4 font-display text-xl text-foreground">Frauen in der Lebensmitte sind eine besondere Herzensangelegenheit von mir.</p>
                <p>
                  Diese Lebensphase bringt häufig Veränderungen mit sich – körperlich, emotional und manchmal auch in der persönlichen Lebensgestaltung. Gleichzeitig kann sie eine wertvolle Gelegenheit sein, innezuhalten, bisherige Lebenswege zu reflektieren und sich selbst mit neuer Klarheit und Wertschätzung zu begegnen.
                </p>
                <p>
                  Ich möchte Frauen ermutigen, ihre Lebenserfahrung als Stärke zu erkennen, den eigenen Bedürfnissen wieder mehr Aufmerksamkeit zu schenken und diese Lebensphase selbstbestimmt, zuversichtlich und mit Lebensfreude zu gestalten.
                </p>
                <p className="font-display text-lg text-foreground italic">Denn manchmal beginnt der wichtigste Schritt nach vorne damit, sich selbst wieder näherzukommen.</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Einfühlsame Begleitung</h3>
                    <p className="text-muted-foreground text-sm">
                      Mit Wärme und Verständnis begleite ich Sie durch schwierige Zeiten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-berry-light rounded-lg">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Neue Perspektiven</h3>
                    <p className="text-muted-foreground text-sm">
                      Gemeinsam entdecken wir neue Wege und Möglichkeiten für Ihr Leben.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Vertraulicher Rahmen</h3>
                    <p className="text-muted-foreground text-sm">
                      Ein geschützter Raum, in dem Sie offen sprechen können.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-xl text-foreground mb-3">
              Lernen wir uns kennen
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Das Kennenlerntelefonat ist unverbindlich und kostenlos.
              Das erste Beratungsgespräch ist kostenpflichtig.
            </p>
            <Button size="lg" variant="brown" asChild>
              <Link to="/#kontakt">Jetzt Kennenlerntelefonat vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UeberMich;
