#include <string>
#include "./transformToScientificNotation.h"


double transformToScientificNotation(double value) {
  std::string valueConverted = std::to_string(value);

  // size_t = type for size (unsigned long long type)
  std::size_t point { valueConverted.find('.') };

  std::string decimal = valueConverted.substr(point + 1);
  std::string integer = valueConverted.substr(0, 1);

  // npos = no position
  if(point != std::string::npos) {

    // remove 0 at the back
    while(!decimal.empty() && decimal.back() == '0') {
      decimal.pop_back();
    }
  }

  std::size_t size { decimal.size() };

  double transformedValue {};

}
