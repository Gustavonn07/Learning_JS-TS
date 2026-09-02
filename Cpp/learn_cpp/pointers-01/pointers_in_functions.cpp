#include <iostream>

// Recebe um ponteiro
void increment(int* count)
{
  ++*count;
}

int main () 
{
  // Salva na memoria "X" o valor 10
  int count = 10;

  // Salva na memoria "Y" o endereço da memória do inteiro "count" que é "X" e &count obtém o endereço de "count"
  int* count_pointer = &count;

  increment(count_pointer);

  std::cout << count << std::endl;
}