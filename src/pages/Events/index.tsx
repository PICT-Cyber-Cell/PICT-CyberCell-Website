import { useState } from 'react';
import EventCard from '../../components/events/EventCard';
import EventModal from '../../components/events/EventModal';
import Button from '../../components/ui/Button';
import { Calendar, History } from 'lucide-react';
import { events } from '../../Data/events';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null); // Correct type for selectedEvent

  // Filter events based on active tab
  const filteredEvents = events.filter((event) => {
    if (activeTab === 'upcoming') {
      return event.attributes.status === 'upcoming';
    } else if (activeTab === 'past') {
      return event.attributes.status === 'past';
    }
    return true; // 'all' - show both past and upcoming events
  });

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
          Events
        </h1>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === 'all' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('all')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            All Events
          </Button>
          <Button
            variant={activeTab === 'upcoming' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('upcoming')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Upcoming Events
          </Button>
          <Button
            variant={activeTab === 'past' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('past')}
          >
            <History className="w-4 h-4 mr-2" />
            Past Events
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={setSelectedEvent}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No {activeTab} events found.
          </div>
        )}

        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Events;
