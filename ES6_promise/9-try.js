/* eslint-disable */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const results = (mathFunction());
    queue.push(results);
  } catch (error) {
    queue.push(error.toString());
  }
  queue.push('Guardrail was processed');
  return queue;
}