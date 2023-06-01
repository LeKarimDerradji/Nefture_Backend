// test.js
const Creature = require('./creature.model');

async function test() {
  try {
    // Create a new creature
    const creature = await Creature.create({
      address: '0x123abc',
      nefturianId: 1,
    });

    console.log('Creature created successfully:', creature.toJSON());
  } catch (error) {
    console.error('Error creating creature:', error);
  }
}

test();
