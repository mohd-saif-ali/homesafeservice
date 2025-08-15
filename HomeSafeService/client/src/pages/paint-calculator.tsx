import { useState } from "react";
import { Calculator, ArrowLeft, Home, Palette, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface CalculationResult {
  totalArea: number;
  paintRequired: number;
  estimatedCost: number;
  coverage: number;
}

export default function PaintCalculator() {
  const [roomType, setRoomType] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [doors, setDoors] = useState<string>("2");
  const [windows, setWindows] = useState<string>("2");
  const [paintType, setPaintType] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const paintTypes = {
    "emulsion": { name: "Emulsion Paint", coverage: 120, price: 15 },
    "distemper": { name: "Distemper", coverage: 100, price: 8 },
    "enamel": { name: "Enamel Paint", coverage: 110, price: 25 },
    "texture": { name: "Texture Paint", coverage: 80, price: 45 },
    "premium": { name: "Premium Paint", coverage: 130, price: 35 }
  };

  const roomTypes = {
    "living": "Living Room",
    "bedroom": "Bedroom", 
    "kitchen": "Kitchen",
    "bathroom": "Bathroom",
    "office": "Office",
    "custom": "Custom Room"
  };

  const calculatePaint = () => {
    if (!length || !width || !height || !paintType) {
      return;
    }

    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const d = parseInt(doors);
    const win = parseInt(windows);

    // Calculate wall area (4 walls)
    const wallArea = 2 * (l * h) + 2 * (w * h);
    
    // Subtract door area (average door: 7ft x 3ft = 21 sqft)
    const doorArea = d * 21;
    
    // Subtract window area (average window: 4ft x 3ft = 12 sqft)
    const windowArea = win * 12;
    
    // Total paintable area
    const totalArea = wallArea - doorArea - windowArea;
    
    // Calculate paint required based on coverage
    const selectedPaint = paintTypes[paintType as keyof typeof paintTypes];
    const paintRequired = totalArea / selectedPaint.coverage; // in liters
    
    // Calculate estimated cost
    const estimatedCost = paintRequired * selectedPaint.price;

    setResult({
      totalArea: Math.round(totalArea),
      paintRequired: Math.round(paintRequired * 10) / 10,
      estimatedCost: Math.round(estimatedCost),
      coverage: selectedPaint.coverage
    });
  };

  const resetCalculator = () => {
    setRoomType("");
    setLength("");
    setWidth("");
    setHeight("");
    setDoors("2");
    setWindows("2");
    setPaintType("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-blue text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/10" data-testid="back-home">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Calculator className="h-6 w-6" />
                <h1 className="text-2xl font-bold">Paint Calculator</h1>
              </div>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-brand-blue">
                <Palette className="h-5 w-5" />
                <span>Room Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Room Type
                </label>
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger data-testid="select-room-type">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(roomTypes).map(([key, value]) => (
                      <SelectItem key={key} value={key}>{value}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Length (ft)
                  </label>
                  <Input
                    type="number"
                    placeholder="12"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    data-testid="input-length"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width (ft)
                  </label>
                  <Input
                    type="number"
                    placeholder="10"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    data-testid="input-width"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (ft)
                  </label>
                  <Input
                    type="number"
                    placeholder="9"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    data-testid="input-height"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Doors
                  </label>
                  <Select value={doors} onValueChange={setDoors}>
                    <SelectTrigger data-testid="select-doors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Windows
                  </label>
                  <Select value={windows} onValueChange={setWindows}>
                    <SelectTrigger data-testid="select-windows">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5, 6].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paint Type
                </label>
                <Select value={paintType} onValueChange={setPaintType}>
                  <SelectTrigger data-testid="select-paint-type">
                    <SelectValue placeholder="Select paint type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(paintTypes).map(([key, paint]) => (
                      <SelectItem key={key} value={key}>
                        {paint.name} (₹{paint.price}/L)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={calculatePaint}
                  className="flex-1 bg-brand-orange hover:bg-orange-600 text-white"
                  data-testid="button-calculate"
                >
                  <PaintBucket className="h-4 w-4 mr-2" />
                  Calculate Paint
                </Button>
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="flex-1"
                  data-testid="button-reset"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-brand-blue">
                <Calculator className="h-5 w-5" />
                <span>Calculation Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-brand-blue" data-testid="result-area">
                        {result.totalArea}
                      </div>
                      <div className="text-sm text-gray-600">Sq Ft to Paint</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-brand-orange" data-testid="result-paint">
                        {result.paintRequired}L
                      </div>
                      <div className="text-sm text-gray-600">Paint Required</div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2" data-testid="result-cost">
                      ₹{result.estimatedCost}
                    </div>
                    <div className="text-sm text-gray-600">Estimated Paint Cost</div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Calculation Details:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Coverage: {result.coverage} sq ft per liter</li>
                      <li>• Door area deducted: {parseInt(doors) * 21} sq ft</li>
                      <li>• Window area deducted: {parseInt(windows) * 12} sq ft</li>
                      <li>• Total paintable area: {result.totalArea} sq ft</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This is an estimated calculation. Actual requirements may vary based on wall texture, primer needs, and number of coats.
                    </p>
                  </div>

                  <Link href="/#book-service">
                    <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white" data-testid="button-book-service">
                      Book Professional Service
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Fill in the room details to calculate paint requirements</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Paint Guide */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-brand-blue">Paint Guide & Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Paint Types</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Emulsion:</strong> Best for interiors, easy to clean</li>
                  <li>• <strong>Distemper:</strong> Budget-friendly option</li>
                  <li>• <strong>Enamel:</strong> Durable, good for woodwork</li>
                  <li>• <strong>Texture:</strong> Decorative finish</li>
                  <li>• <strong>Premium:</strong> Long-lasting, superior quality</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Coverage Tips</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Smooth walls need less paint</li>
                  <li>• Textured surfaces require 10-20% more</li>
                  <li>• Dark colors may need extra coats</li>
                  <li>• Prime before painting for best results</li>
                  <li>• Buy 10% extra for touch-ups</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Cost Factors</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Paint quality affects price</li>
                  <li>• Labor costs vary by location</li>
                  <li>• Preparation work adds to cost</li>
                  <li>• Multiple coats increase expense</li>
                  <li>• Professional service includes tools</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}