import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass, Leaf, Sun, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FrauenLongevity = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="section-padding bg-background pt-28 md:pt-36">
        <div className="container-narrow">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </div>
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Schwerpunkt</p>
            <h1 className="font-display text-display-sm md:text-display text-foreground mb-6">50+ & Longevity</h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="font-display text-xl md:text-2xl text-foreground">Nicht nur länger leben, sondern bewusster, erfüllter und selbstbestimmter.</p>
              <p>Mit 50+ beginnt eine wertvolle Lebensphase voller neuer Möglichkeiten, in der sich Fragen nach Sinn, Gesundheit und dem eigenen Lebensweg neu stellen. Was bleibt, was verändert sich – und was will ich für die kommenden Jahre wirklich?</p>
              <p>In der Beratung unterstütze ich Sie dabei, diese Lebensphase bewusst zu gestalten, Ressourcen zu stärken und einen Umgang mit Veränderung zu finden, der Ihnen entspricht.</p>
              <p>Denn Longevity bedeutet, die körperliche und mentale Gesundheit bewusst zu stärken, die eigene Lebensqualität zu fördern und Vitalität, innere Balance und Selbstbestimmung langfristig zu erhalten.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {[
              { icon: Star, title: "Reife & Weisheit", text: "Lebenserfahrung als Stärke erkennen, neue Perspektiven entwickeln und mit Gelassenheit und innerer Klarheit durchs Leben gehen." },
              { icon: Compass, title: "Lebensmitte – Zeit für neue Perspektiven", text: "Veränderungen annehmen und neue Möglichkeiten für persönliche Entfaltung entdecken." },
              { icon: Leaf, title: "Selbstfürsorge & Lebensbalance", text: "Die eigenen Bedürfnisse wahrnehmen, persönliche Grenzen achten und das körperliche und seelische Wohlbefinden stärken." },
              { icon: Sun, title: "Vitalität & Lebensfreude", text: "Die eigene Lebendigkeit bewahren, persönliche Ressourcen aktivieren und mit Neugier und Zuversicht die neue Lebensphase gestalten." },
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border">
                <div className="p-3 bg-sage-light rounded-lg w-fit mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-xl text-foreground mb-3">Bereit für den ersten Schritt?</h3>
            <p className="text-muted-foreground mb-6">Das Kennenlerntelefonat ist unverbindlich und kostenlos. Das erste Beratungsgespräch ist kostenpflichtig.</p>
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

export default FrauenLongevity;
