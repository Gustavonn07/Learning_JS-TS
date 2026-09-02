#include <iostream>

int main() 
{
  int a = 222;
  int *pointer = &a;

  std::cout << "pointer " << pointer << std::endl;
  std::cout << "&pointer " << &pointer << std::endl;
  std::cout << "*pointer " << *pointer << std::endl;
  std::cout << "------" << std::endl;
  std::cout << "a " << a << std::endl;
  std::cout << "&a " << &a << std::endl;
  std::cout << "------" << std::endl;

  *pointer = 1908;

  std::cout << "pointer " << pointer << std::endl;
  std::cout << "&pointer " << &pointer << std::endl;
  std::cout << "*pointer " << *pointer << std::endl;
  std::cout << "------" << std::endl;
  std::cout << "a " << a << std::endl;
  std::cout << "&a " << &a << std::endl;
  std::cout << "FIM ------" << std::endl;

  delete pointer;
  // FOI REMOVIDO
  std::cout << "pointer " << pointer << std::endl;
  std::cout << "&pointer " << &pointer << std::endl;
  std::cout << "*pointer " << *pointer << std::endl;
  std::cout << "------" << std::endl;
  std::cout << "a " << a << std::endl;
  std::cout << "&a " << &a << std::endl;
  std::cout << "------" << std::endl;
}
