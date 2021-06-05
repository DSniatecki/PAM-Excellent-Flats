import unittest
import os
from time import sleep

from appium import webdriver
from applitools.selenium import Eyes


class Finder:

    def __init__(self, driver):
        self.driver = driver

    def find(self, id: str):
        return self.driver.find_element_by_accessibility_id(id)

    def find_all(self):
        return self.driver.find_elements_by_xpath("//*")

    def click(self, id: str):
        self.driver.find_element_by_accessibility_id(id).click()
        sleep(1)


class SimpleCalculatorTests(unittest.TestCase):

    @classmethod
    def setUpClass(self):
        desired_caps = {
            "deviceName": "Pixel 4 XL API 26",
            "platformName": "Android",
            "platformVersion": "8",
        }
        self.driver = webdriver.Remote(
            command_executor='http://127.0.0.1:4723/wd/hub',
            desired_capabilities=desired_caps
        )

    @classmethod
    def tearDownClass(self):
        self.driver.quit()

    def test_app_flow(self):
        finder = Finder(self.driver)
        find = finder.find
        click = finder.click
        assertEqual = self.assertEqual
        assertIsNotNone = self.assertIsNotNone
        assertTrue = self.assertTrue

        def test_main_screen():
            print('Testing main screen...')
            logo = find('flat-start-menu-text')
            drawer_icon = find('flat-start-menu-icon')
            search_button = find('start-button-press')
            favourites_button = find('start-button-press2')

            assertIsNotNone(logo)
            assertEqual('ExcellentFlats', logo.text)
            assertIsNotNone(drawer_icon)
            assertIsNotNone(search_button)
            assertIsNotNone(favourites_button)

        def test_drawer():
            print('Testing drawer...')
            start_link = find('drawer-start')
            search_link = find('drawer-search')
            map_link = find('drawer-map')
            favourites_link = find('drawer-favour')
            assertIsNotNone(start_link)
            assertEqual('Start', start_link.text)
            assertIsNotNone(search_link)
            assertEqual('Szukaj', search_link.text)
            assertIsNotNone(map_link)
            assertEqual('Mapa', map_link.text)
            assertIsNotNone(favourites_link)
            assertEqual('Ulubione', favourites_link.text)

        def test_favourites():
            print('Testing favourites screen...')
            header_text = find('app-header-text')
            assertEqual('Ulubione', header_text.text)
            ad1_price = find('ad-price-1')
            ad1_location = find('ad-location-1')
            ad1_surface = find('ad-surface-1')
            ad1_rooms = find('ad-rooms-1')
            assertEqual('630 000 zł', ad1_price.text)
            assertEqual('Wroclaw, Krzyki', ad1_location.text)
            assertEqual('92.23 m2', ad1_surface.text)
            assertEqual('4 pokoje', ad1_rooms.text)

        def test_map():
            print('Testing map screen...')
            elem1 = self.driver.find_element_by_xpath(
                '//android.view.View[@content-desc="Google Map"]/android.view.View[2]')
            elem2 = self.driver.find_element_by_xpath(
                '//android.view.View[@content-desc="Google Map"]/android.view.View[2]')

            assertIsNotNone(elem1)
            assertIsNotNone(elem2)

        def test_filters():
            print('Testing filters...')
            assertEqual('Podaj miejscowość', find('flat-filters-location-input').text)
            assertEqual('Cena', find('flat-filters-price').text)
            assertEqual(' >Powierzchnia', find('flat-filters-surface2').text)
            assertIsNotNone(find('flat-filters-press'))

        def test_ads():
            print('Testing ads screen...')
            assertEqual('Ogłoszenia', find('app-header-text').text)

            assertEqual('630 000 zł', find('ad-price-1').text)
            assertEqual('Wroclaw, Krzyki', find('ad-location-1').text)
            assertEqual('92.23 m2', find('ad-surface-1').text)
            assertEqual('4 pokoje', find('ad-rooms-1').text)

            assertEqual('523 000 zł', find('ad-price-3').text)
            assertEqual('Wrocław, Śródmieście', find('ad-location-3').text)
            assertEqual('41.93 m2', find('ad-surface-3').text)
            assertEqual('2 pokoje', find('ad-rooms-3').text)

        def test_selected_ad_screen():
            print('Testing selected ad screen...')
            assertEqual('Piękne mieszkanie w samym centrum krzyków', find('flat-ad-title').text)
            assertEqual('630 000 zł', find('flat-ad-price').text)

            assertEqual('Szczegóły', find('flat-ad-details-head').text)

            assertEqual('Rynek pierwotny', find('flat-ad-market-type').text)
            assertEqual('2021', find('flat-ad-cons-year').text)
            assertEqual('Wroclaw, Krzyki', find('flat-ad-location0').text)
            assertEqual('4 pokoje', find('flat-ad-rooms').text)
            assertEqual('92.23 m2', find('flat-ad-surface0').text)

            assertEqual('Opis', find('flat-ad-description-header').text)
            assertTrue(find('flat-ad-description0').text.startswith('Bardzo interesujący apartament o powierzchni'))

        test_main_screen()
        click('flat-start-menu-icon')  # open drawer
        test_drawer()
        click('drawer-icon')  # close drawer
        test_main_screen()
        click('start-button-press2')  # open favourites
        test_favourites()
        click('app-header-icon')
        click('flat-start-menu-icon')
        click('drawer-map')
        test_map()
        click('app-header-icon')
        click('start-button-press')
        test_filters()
        click('app-header-icon')
        click('start-button-press')
        click('flat-filters-press')
        test_ads()
        click('app-header-icon')
        click('drawer-start')
        click('start-button-press')
        click('flat-filters-press')
        click('ad-info-view-1')
        test_selected_ad_screen()
        click('app-header-icon')
        click('app-header-icon')
        click('drawer-start')


if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(SimpleCalculatorTests)
    unittest.TextTestRunner(verbosity=2).run(suite)
